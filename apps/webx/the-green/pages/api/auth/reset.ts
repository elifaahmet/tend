import { resetTendId } from '../../../api/auth-backend/tend-client';
import withSession from '../../../hooks/with-session';

export default withSession(async (req, res) => {
  const user = req.session.get('user');
  const result = await resetTendId({ accessToken: user.tendAccessToken });
  console.log('result', result);
  req.session.destroy();

  res.redirect(302, '/');
});
