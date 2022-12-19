import { Router } from "express";
import { loginRequired } from "../middlewares/login-required";
const viewsRouter = Router();

viewsRouter.get("/", (req, res) => {
  res.render("main");
});

viewsRouter.get("/join", (req, res) => {
  res.render("join");
});

viewsRouter.get("/login", (req, res) => {
  res.render("login");
});

viewsRouter.get("/logout", (req, res) => {
  res.cookie("token", null, {
    maxAge: 0,
  });
  res.redirect("/");
});

viewsRouter.get("/auth", loginRequired, (req, res) => {
  res.send("짜잔~ㅋ 메리크뤼스마스~");
});

export { viewsRouter };
