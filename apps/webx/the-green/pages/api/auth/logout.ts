import withSession from '../../../hooks/with-session';

export default withSession(async (req, res) => {
  req.session.destroy();
  res.redirect(302, '/');
});
