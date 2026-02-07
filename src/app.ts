
import express, { Application, Request, Response } from "express";
import cors from "cors";
import { prisma } from './app/lib/prisma';
import { IndexRoutes } from "./app/routes";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", IndexRoutes)

app.get("/", async (req: Request, res: Response) => {

  const specialty = await prisma.specialty.create({
    data: {
      title: "Cardiology",
    }
  });
  res.status(200).json({ message: "Healthcare API is running", specialty  });
});

export default app;
