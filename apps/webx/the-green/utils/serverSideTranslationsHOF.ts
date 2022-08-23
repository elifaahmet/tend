import {serverSideTranslations, SSRConfig, UserConfig} from "@tend/webx/utils/next-i18next";
import i18Config from '../next-i18next.config'

export const serverSideTranslationsHOF = async (
  initialLocale: string,
  namespacesRequired: string[] | undefined = undefined,
  configOverride: UserConfig | null = null,
): Promise<SSRConfig> => {
  return serverSideTranslations(initialLocale, i18Config, namespacesRequired, configOverride)
}
