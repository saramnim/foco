import express from 'express';
import path from 'path';
import { jwtMiddle } from './middlewares/get-user-from-jwt';
import { loginRequired } from './middlewares/login-required';
import cookieParser from 'cookie-parser';
import { postRouter } from './routers';
import { authRouter } from './routers/auth';
import { usersRouter } from './routers/users';
import { viewsRouter } from './routers/views';
import { endPoint } from './constants';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(jwtMiddle);

app.use(express.json());
app.use(endPoint.post, postRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//화면요청
app.use(viewsRouter);

//api요청
app.use('/users', loginRequired, usersRouter);
app.use('/auth', authRouter);

export { app };
