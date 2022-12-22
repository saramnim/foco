import passport from "passport";
import { jwt } from "../passport/strategies/jwt";

const jwtMiddle = (req, res, next) => {
  if (!req.cookies.token) {
    next();
    return;
  }

  return passport.authenticate(jwt, { session: false })(req, res, next);
};

export { jwtMiddle };
