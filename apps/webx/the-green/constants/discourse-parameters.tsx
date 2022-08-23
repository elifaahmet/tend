export const getDiscourseBaseUrl = (locale) => {
  if(locale === 'en-US') return process.env.NEXT_SERVER_DISCOURSE_BASE_URL;
  if(locale === 'es-MX') return process.env.NEXT_SERVER_DISCOURSE_BASE_URL_MX;
}

export const getDiscourseApiKey = (locale) => {
  if(locale === 'en-US') return process.env.NEXT_SERVER_DISCOURSE_API_KEY;
  if(locale === 'es-MX') return process.env.NEXT_SERVER_DISCOURSE_API_KEY_MX;
}
