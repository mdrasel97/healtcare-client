import app from "./app";
import dotenv from "dotenv";

dotenv.config();

// app.listen(process.env.PORT, () => {
//   console.log(`🔥 Healthcare server running on port ${process.env.PORT}`);
// });


const bootstrap = async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`🔥 Healthcare server running on port ${process.env.PORT}`);
    });
  }catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  } 
};


bootstrap();
