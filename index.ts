import { app } from "./src/app";
import { dbConnect } from "./src/db/index";
import "dotenv/config";

dbConnect();

app.listen(process.env.PORT, () => {
  console.log("SERVER STARTED");
});
