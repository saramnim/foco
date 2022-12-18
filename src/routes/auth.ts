import passport from "passport";
import { Router } from "express";
import { User } from "../db/models/userModel";
import { setUserToken } from "../utils/jwt";
import { hashPassword } from "../utils/hash-password";
import { asyncHandler } from "../utils/async-handler";
import { local } from "../passport/strategies/local";

const authRouter = Router();

//회원가입 요청 핸들러
authRouter.post(
  "/join",
  asyncHandler(async (req, res, next) => {
    const { email, name, password } = req.body;
    const pwHash = hashPassword(password);
    const exists = await User.findOne({
      email,
    });

    if (exists) {
      throw new Error("이미가입된 메일입니데이");
    }

    await User.create({
      email,
      name,
      password: pwHash,
    });
    res.redirect("/");
  })
);

authRouter.post(
  "/login",
  passport.authenticate(local, {
    session: false,
  }),
  (req, res, next) => {
    setUserToken(res, req.user);
    res.redirect("/");
  }
);

export { authRouter };
