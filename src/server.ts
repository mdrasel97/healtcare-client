import app from "./app";
import dotenv from "dotenv";
import { envVers } from "./config/env";

dotenv.config();


const bootstrap = async () => {
  try {
    app.listen(envVers.PORT, () => {
      console.log(`🔥 Healthcare server running on port ${envVers.PORT}`);
    }); 
  }catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  } 
};


bootstrap();
