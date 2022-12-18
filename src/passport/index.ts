import passport from "passport";
import { local } from "./strategies/local";
import { jwt } from "./strategies/jwt";

module.exports = () => {
  passport.use(local);
  passport.use(jwt);
};
