/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express"
import { envVers } from "../config/env"
import status from "http-status"
import z from "zod";
import { IErrorSource, TErrorResponse } from "../app/interfaces/error.interface";
import { handleZodError } from "../app/errorHelpers/handleZodError";




// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const globalErrorHandler = ((err: any, req: Request, res: Response, next: NextFunction)=>{
if(envVers.NODE_ENV === "development"){
    console.log("Error from global error Handler", err)
}


//  error.issues; 
    /* [
      {
        expected: 'string',
        code: 'invalid_type',
        path: [ 'username' ],
        message: 'Invalid input: expected string'
      },
      {
        expected: 'number',
        code: 'invalid_type',
        path: [ 'xp' ],
        message: 'Invalid input: expected number'
      }
    ] */

const errorSource: IErrorSource[] = []
let statusCode : number = status.INTERNAL_SERVER_ERROR
let message : string = "Internal Server error"
let stack : string | undefined = undefined

if(err instanceof z.ZodError){
 const simpleFidError = handleZodError(err)
      statusCode = simpleFidError.statusCode as number
      message= simpleFidError.message
      errorSource.push(...simpleFidError.errorSource!)
      stack=err.stack
}else if(err instanceof Error){
  statusCode = status.INTERNAL_SERVER_ERROR
  message= err.message
  stack = err.stack

}

const errorResponse : TErrorResponse = {
  success: false,
  message: message,
  errorSource,
  
  stack: envVers.NODE_ENV === "development" ? stack : undefined,
  error: envVers.NODE_ENV === "development" ? err : undefined
}


res.status(statusCode).json(errorResponse)
})