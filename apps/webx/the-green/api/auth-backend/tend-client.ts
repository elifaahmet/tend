import { TEND_BASE_URL } from '../../env';
import { generateHashPassword } from '../../utils/sha';
import { AccountLoginResponse, GetTendIdResponse, ResetTendIdResponse, CreateUpdateTendIdResponse } from './types';

export const GET_TEND_ID = `
  query tendId {
   tendId
  }
`;

export const CREATE_UPDATE_TEND_ID = `
  mutation {
    createUpdateTendId(tendId: "$tendId") {
      ok
      message
      tendId
    }
  }
`;

export const RESET_TEND_ID = `
  mutation {
    resetTendId {
      ok
      message
    }
  }
`;

export const CREATE_SECURE_LOGIN = `
  mutation {
    discourseLogin(email: "$email", phone: "$phone", password: "$password") {
      ok
      message
      tendAccessToken
      discourseAccessToken
      discourseAccount {
        email
        username
        avatar
        discourseId
        name
      }
    }
  }
`;

export const getTendId = async (token: string): Promise<{ id?: string; isSuccess: boolean }> => {
  try {
    const result: GetTendIdResponse = await fetch(`${TEND_BASE_URL}/service-auth/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: GET_TEND_ID,
      }),
      headers: {
        'Content-Type': 'application/json',
        Cookie: `authToken=${token}`,
      },
    }).then((res) => res.json());

    return {
      isSuccess: result.data.tendId !== undefined,
      id: result.data.tendId,
    };
  } catch (e) {
    return {
      isSuccess: false,
    };
  }
};

export const createUpdateTendId = async ({ tag, accessToken }): Promise<{ isSuccess: boolean; message?: string }> => {
  const request = CREATE_UPDATE_TEND_ID.replace('$tendId', tag);
  try {
    const result: CreateUpdateTendIdResponse = await fetch(`${TEND_BASE_URL}/service-auth/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: request,
      }),
      headers: {
        'Content-Type': 'application/json',
        Cookie: `authToken=${accessToken}`,
      },
    }).then((res) => res.json());

    if (result.errors) {
      return {
        isSuccess: false,
        message: result.errors && result.errors[0].message,
      };
    }

    return {
      isSuccess: result.data.createUpdateTendId.ok,
      message: result.data.createUpdateTendId.message,
    };
  } catch (e) {
    return {
      isSuccess: false,
    };
  }
};

export const resetTendId = async ({ accessToken }): Promise<{ isSuccess: boolean; message?: string }> => {
  try {
    const result: ResetTendIdResponse = await fetch(`${TEND_BASE_URL}/service-auth/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: RESET_TEND_ID,
      }),
      headers: {
        'Content-Type': 'application/json',
        Cookie: `authToken=${accessToken}`,
      },
    }).then((res) => res.json());

    return {
      isSuccess: result.data.resetTendId.ok,
      message: result.data.resetTendId.message,
    };
  } catch (e) {
    return {
      isSuccess: false,
    };
  }
};

export const authenticate = async ({
  email,
  phone,
  password,
}): Promise<{
  isSuccess: boolean;
  message?: string;
  tendAccessToken?: string;
  discourseAccessToken?: string;
  discourseAccount?: {
    email?: string;
    username?: string;
    avatar?: string;
    discourseId?: string;
    name?: string;
  };
}> => {
  const request = CREATE_SECURE_LOGIN.replace('$email', email).replace('$phone', phone || '').replace('$password', generateHashPassword(password));
  try {
    const result: AccountLoginResponse = await fetch(`${TEND_BASE_URL}/service-green/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: request,
      }),
    }).then((res) => res.json());

    if (result.errors) {
      return {
        isSuccess: false,
        message: result.errors[0]?.message,
      };
    }

    return {
      isSuccess: result.data.discourseLogin.ok,
      message: result.data.discourseLogin.message,
      tendAccessToken: result.data.discourseLogin.tendAccessToken,
      discourseAccessToken: result.data.discourseLogin.discourseAccessToken,
      discourseAccount: result.data.discourseLogin.discourseAccount
    };
  } catch (e) {
    return {
      isSuccess: false,
    };
  }
};
