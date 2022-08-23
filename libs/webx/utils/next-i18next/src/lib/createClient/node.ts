import i18n from 'i18next'

import { InternalConfig, CreateClientReturn, InitPromise, I18n } from '../types'

let globalInstance: I18n

const nodeCreateClient = (config: InternalConfig): CreateClientReturn => {
  let instance: I18n
  if (!globalInstance) {
    globalInstance = i18n.createInstance(config)
    instance = globalInstance
  } else {
    instance = globalInstance.cloneInstance({
      ...config,
      initImmediate: false,
    })
  }
  let initPromise: InitPromise

  if (!instance.isInitialized) {
    const hasCustomBackend = config?.use?.some((b) => b.type === 'backend')

    config?.use?.forEach(x => instance.use(x))
    initPromise = import(/* webpackIgnore: true */'i18next-fs-backend').then((mod) => {
        if (!hasCustomBackend) {
          instance.use(mod.default)
        }
        config?.use?.forEach(x => instance.use(x))
        return instance.init(config)
      })
  } else {
    initPromise = Promise.resolve(i18n.t)
  }

  return { i18n: instance, initPromise }
}

export default nodeCreateClient;
