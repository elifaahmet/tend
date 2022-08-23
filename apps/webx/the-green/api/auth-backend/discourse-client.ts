import { DISCOURSE_ADMIN_PASSWORD, DISCOURSE_ADMIN_USERNAME } from '../../env';
import { decodeBase64, encodeBase64 } from '../../utils/base64';
import { parseCookieArray } from '../../utils/cookie';
import {
  ApiResponse,
  DiscourseChallengeResponse,
  DiscourseCSRFResponse,
  ErrorModel,
  LoginResponseModel,
  RegisterResponseModel,
} from './types';
import { getDiscourseBaseUrl } from "../../constants/discourse-parameters";

const getCsrfToken = async (locale: string, cookie?: string): Promise<DiscourseCSRFResponse> => {
  const response = await fetch(`${getDiscourseBaseUrl(locale)}/session/csrf`, {
    method: 'GET',
    headers: {
      'x-requested-with': 'XMLHttpRequest',
      cookie: cookie ?? '',
    },
  });

  const csrfHeaders = response.headers;
  const csrfResponse = await response.json();

  return {
    csrf: csrfResponse.csrf,
    cookie: parseCookieArray([csrfHeaders.get('set-cookie')]),
  };
};

const getChallengeToken = async (locale): Promise<DiscourseChallengeResponse> => {
  const response = await fetch(`${getDiscourseBaseUrl(locale)}/session/hp.json`, {
    method: 'GET',
    headers: {
      'x-requested-with': 'XMLHttpRequest',
    },
  });

  const headers = response.headers;
  const challengeResponse = await response.json();

  return {
    challenge: challengeResponse.challenge,
    value: challengeResponse.value,
    cookie: parseCookieArray([headers.get('set-cookie')]),
  };
};

export const doesDiscourseUserExist = async ({ tendId, email }, locale) => {
  try {
    const data = await fetch(`${getDiscourseBaseUrl(locale)}/u/check_username?username=${tendId}&email=${email}`, {
      method: 'GET',
      headers: {
        'x-requested-with': 'XMLHttpRequest',
      },
    }).then((res) => res.json());

    return !data || !data.available;
  } catch (e) {
    return false;
  }
};

export const discourseLogin = async ({ email, password }, locale: string) => {
  const csrfResponse = await getCsrfToken(locale);

  try {
    const response = await fetch(`${getDiscourseBaseUrl(locale)}/session`, {
      body: `login=${email}&password=${password}`,
      method: 'POST',
      headers: {
        accept: '*/*',
        'discourse-present': 'true',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-csrf-token': csrfResponse.csrf,
        'x-requested-with': 'XMLHttpRequest',
        cookie: csrfResponse.cookie,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const headers = response.headers as any;
    const data = await response.json();

    if (data.error) {
      return ApiResponse.failed([new ErrorModel(data.error)]);
    }
    const cookies = parseCookieArray(headers.raw()['set-cookie']);

    const token = encodeBase64(cookies);

    return ApiResponse.success(new LoginResponseModel(data, token));
  } catch (e) {
    return ApiResponse.failed([new ErrorModel('An error occurred')]);
  }
};

export const activateDiscourseUser = async (userId: number, locale: string) => {
  const loginResult = await discourseLogin({ email: DISCOURSE_ADMIN_USERNAME, password: DISCOURSE_ADMIN_PASSWORD }, locale);
  const loginCookie = decodeBase64(loginResult.result.token);

  const csrfResponse = await getCsrfToken(loginCookie);

  try {
    const data = await fetch(`${getDiscourseBaseUrl(locale)}/admin/users/${userId}/activate`, {
      method: 'PUT',
      body: null,
      headers: {
        accept: '*/*',
        'Discourse-Logged-In': 'true',
        'discourse-present': 'true',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-csrf-token': csrfResponse.csrf,
        'x-requested-with': 'XMLHttpRequest',
        cookie: loginCookie,
      },
    }).then((res) => res.json());

    if (!data.success) {
      return ApiResponse.failed([new ErrorModel('Registration failed')]);
    }

    return ApiResponse.success({});
  } catch (e) {
    return ApiResponse.failed([new ErrorModel('An error occurred')]);
  }
};

export const createDiscourseUser = async (
  username: string,
  email: string,
  password: string,
  locale: string,
): Promise<ApiResponse<RegisterResponseModel>> => {
  const challengeResponse = await getChallengeToken(locale);
  const csrfResponse = await getCsrfToken(challengeResponse.cookie);

  try {
    const requestData = encodeURI(
      `name=${email}&email=${email}&password=${password}&username=${username}&password_confirmation=${
        challengeResponse.value
      }&challenge=${challengeResponse.challenge.split('').reverse().join('')}`
    );

    const data = await fetch(`${getDiscourseBaseUrl(locale)}/u`, {
      body: requestData,
      method: 'POST',
      headers: {
        accept: '*/*',
        'discourse-present': 'true',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-csrf-token': csrfResponse.csrf,
        'x-requested-with': 'XMLHttpRequest',
        cookie: challengeResponse.cookie,
      },
    }).then((res) => res.json());

    if (!data.user_id) {
      return ApiResponse.failed([new ErrorModel('Registration failed')]);
    }

    return ApiResponse.success<RegisterResponseModel>({
      userId: data.user_id,
    });
  } catch (e) {
    return ApiResponse.failed([new ErrorModel('An error occurred')]);
  }
};
