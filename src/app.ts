import express, { Request, Response, NextFunction } from 'express';
import mongoose from "mongoose";
import { PORT, MONGODB_URI } from './config';

const app = express();
//yarn dev시 warning -> mongodb uri 다시 설정해줘야됨
mongoose.connect(MONGODB_URI);
mongoose.connection.on('connected', ()=> {
  console.log(`Successfully connected to MongoDB: ${MONGODB_URI}`);
})

app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
    res.send('welcome!');
});

app.listen(PORT, () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: ${PORT}🛡️
  ################################################
`);
});