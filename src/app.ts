/* eslint-disable @typescript-eslint/no-explicit-any */

import express, { Application, Request, Response } from "express";
import cors from "cors";
import { prisma } from './app/lib/prisma';
import { IndexRoutes } from "./app/routes";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { notFound } from "./middleware/notFound";
import cookieParser from "cookie-parser";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.use("/api/v1", IndexRoutes)

app.get("/", async (req: Request, res: Response) => {

  const specialty = await prisma.specialty.create({
    data: {
      title: "Cardiology",
    }
  });
  res.status(200).json({ message: "Healthcare API is running", specialty  });
});



app.use(globalErrorHandler)
app.use(notFound)


export default app;
