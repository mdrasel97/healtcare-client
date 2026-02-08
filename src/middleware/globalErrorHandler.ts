/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express"
import { envVers } from "../config/env"
import status from "http-status"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const globalErrorHandler = ((err: any, req: Request, res: Response, next: NextFunction)=>{
if(envVers.NODE_ENV === "development"){
    console.log("Error from global error Handler", err)
}

let statusCode : number = status.INTERNAL_SERVER_ERROR
let message : string = "Internal Server error"
res.status(statusCode).json({
  success: false,
  message: message,
  error: err.message
})
})