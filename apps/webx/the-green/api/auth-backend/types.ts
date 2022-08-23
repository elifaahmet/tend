export type GetTendIdResponse = {
  data: {
    tendId: string;
  };
};

export type CreateUpdateTendIdResponse = {
  data: {
    createUpdateTendId: {
      ok: boolean;
      message: string;
    };
  };
  errors: [
    {
      message: string;
    }
  ];
};

export type ResetTendIdResponse = {
  data: {
    resetTendId: {
      ok: boolean;
      message: string;
    };
  };
};

export type AccountLoginResponse = {
  data: {
    discourseLogin: {
      ok: boolean;
      message: string;
      tendAccessToken: string;
      discourseAccessToken: string;
      discourseAccount: {
        email: string;
        username: string;
        avatar: string;
        discourseId: string;
        name: string;
      };
    };
  };
  errors: [
    {
      message: string;
    }
  ];
};

export class DiscourseSessionResponse {
  error: string;
  user: {
    id: number;
    username: string;
    name: string;
    avatar_template: string;
    email: string;
  };
}

export class LoginResponseModel {
  constructor(response: DiscourseSessionResponse, token: string) {
    const { user } = response;

    if (user) {
      this.id = user.id;
      this.username = user.username;
      this.name = user.name;
      this.avatar = user.avatar_template;
      this.email = user.email;
      this.token = token;
    }
  }

  id?: number;
  username?: string;
  name?: string;
  avatar?: string;
  email?: string;
  token?: string;
  requireNickname?: boolean;
}

export class ErrorModel {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
}

export class ApiResponse<T> {
  constructor(result: T, isSuccess?: boolean, errors?: Array<ErrorModel>) {
    this.result = result;
    this.isSuccess = isSuccess;
    this.errors = errors;
  }
  result: T;
  isSuccess: boolean;
  errors: Array<ErrorModel>;

  static success<T>(result: T) {
    return new ApiResponse(result, true);
  }

  static failed(errors: Array<ErrorModel>) {
    return new ApiResponse(null, false, errors);
  }

  static failedWithResponse<T>(result: T, errors: Array<ErrorModel>) {
    return new ApiResponse(result, false, errors);
  }

  static build<T>(result: T, isSuccess?: boolean, errors?: Array<ErrorModel>) {
    return new ApiResponse(result, isSuccess, errors);
  }
}

export class DiscourseChallengeResponse {
  value: string;
  challenge: string;
  cookie: string;
}

export class DiscourseCSRFResponse {
  csrf: string;
  cookie: string;
}

export class RegisterResponseModel {
  constructor(userId: number) {
    this.userId = userId;
  }

  userId: number;
}
