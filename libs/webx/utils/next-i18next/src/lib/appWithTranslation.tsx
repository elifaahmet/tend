import React, { useMemo } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { I18nextProvider } from 'react-i18next'
import type { AppProps as NextJsAppProps } from 'next/app'

import { createConfig } from './config/createConfig'
import createClientNode from './createClient/node'
import createClientBrowser from './createClient/browser'

import { SSRConfig, UserConfig } from './types'

import i18nModule, { i18n as I18NextClient } from 'i18next'

export { Trans, useTranslation, withTranslation } from 'react-i18next'


type AppProps = NextJsAppProps & {
  pageProps: SSRConfig
}

export let globalI18n: I18NextClient | null = null

export const appWithTranslation = (
  WrappedComponent: React.ComponentType<AppProps> | React.ElementType<AppProps>,
  i18nConfig: UserConfig,
  commonTranslations: {[key: string]: unknown},
  configOverride: UserConfig | null = null,
) => {
  const AppWithTranslation = (props: AppProps) => {
    const { _nextI18Next } = props.pageProps
    const { locale } = props.router

    const i18nConf = (configOverride && configOverride.i18n) ? configOverride.i18n : i18nConfig.i18n;

    // Memoize the instance and only re-initialize when either:
    // 1. The route changes (non-shallowly)
    // 2. Router locale changes
    const i18n: I18NextClient | null = useMemo(() => {
      if (!locale) return null

      if (!_nextI18Next) {

        i18nModule.init({
          resources: {
            [locale]: {
              common: commonTranslations[locale],
            }
          },
          lng: locale,
          ...i18nConf
        });

        globalI18n = i18nModule
        return i18nModule
      }


      let { userConfig } = _nextI18Next
      const { initialI18nStore } = _nextI18Next


      if (userConfig === null && configOverride === null) {
        throw new Error('appWithTranslation was called without a next-i18next config')
      }

      if (configOverride !== null) {
        userConfig = configOverride
      }

      if (!userConfig?.i18n) {
        throw new Error('appWithTranslation was called without config.i18n')
      }

      const createClient = typeof window === 'undefined' ? createClientNode : createClientBrowser;

      const instance = createClient({
        ...createConfig({
          ...userConfig,
          lng: locale,
        }),
        lng: locale,
        resources: initialI18nStore,
      }).i18n

      globalI18n = instance

      return instance
      /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [_nextI18Next, locale])

    return i18n !== null ? (
      <I18nextProvider
        i18n={i18n}
      >
        <WrappedComponent
          key={locale}
          {...props}
        />
      </I18nextProvider>
    ) : (
      <WrappedComponent
        key={locale}
        {...props}
      />
    )
  }

  return hoistNonReactStatics(
    AppWithTranslation,
    WrappedComponent,
  )
}
