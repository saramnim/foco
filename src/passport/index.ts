import passport from 'passport';
import { local } from './strategies/local';
import { jwt } from './strategies/jwt';
import { google } from './strategies/google';

module.exports = () => {
  passport.use(local);
  passport.use(jwt);
  passport.use(google);
};
