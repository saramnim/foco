import { app } from "./src/app";
import { PORT, MONGODB_URI } from './src/config';
import mongoose from "mongoose";



mongoose.set("strictQuery", true).connect(MONGODB_URI);
mongoose.connection.on('connected', ()=> {
  console.log(`Successfully connected to MongoDB: ${MONGODB_URI}`);
});


app.listen(PORT, () => {
  console.log(`
################################################
🛡️  Server listening on port: ${PORT}🛡️
################################################
`);
});

