import { ApiResponse, ErrorModel } from '../../../api/auth-backend/types';
import { authenticate } from '../../../api/auth-backend/tend-client';
import withSession from '../../../hooks/with-session';

const login = async (user: { email: string; password: string; phone: string }) => {

  const account = await authenticate({ email: user.email, password: user.password, phone: user.phone });
  if (account.isSuccess) {
    return ApiResponse.success({ ...account.discourseAccount, tendAccessToken: account.tendAccessToken, discourseAccessToken:account.discourseAccessToken });
  }

  return ApiResponse.failed([new ErrorModel(account.message)]);
};

export default withSession(async (req, res) => {
  const user = req.body;
  if (!user) {
    res.json({
      message: 'Invalid username or password',
      isLoggedIn: false,
    });
  }

  const authResult = await login(user);

  if (authResult && authResult.isSuccess) {
    req.session.set('user', authResult.result);
    await req.session.save();
    return res.json({
      isLoggedIn: authResult.isSuccess,
      ...authResult.result,
    });
  }

  res.json({
    isLoggedIn: authResult.isSuccess,
    ...(authResult.errors && authResult.errors[0]),
    ...authResult.result,
  });
});
