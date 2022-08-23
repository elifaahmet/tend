import {marketinBaseUrls} from "../constants/marketing-base-urls";

export const getMarketingBaseURL = (locale: string): string => {
  return marketinBaseUrls[locale.slice(-2)];
};
