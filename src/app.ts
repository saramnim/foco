import express from "express";
import cors from "cors";
import { authRouter } from "./routes/auth";
import { viewsRouter } from "./routes/views";
import { usersRouter } from "./routes/users";
import path from "path";
import { jwtMiddle } from "./middlewares/get-user-from-jwt";
import { loginRequired } from "./middlewares/login-required";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(jwtMiddle);

//화면요청
app.use(viewsRouter);

//api요청
app.use("/users", loginRequired, usersRouter);
app.use("/api", authRouter);

export { app };
