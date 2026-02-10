import status from "http-status"
import z from "zod"
import { IErrorSource, TErrorResponse } from "../interfaces/error.interface"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleZodError = (err : z.ZodError) : TErrorResponse=>{
     const statusCode = status.BAD_REQUEST
      const message= "Zod Validation Error"

      const errorSource : IErrorSource[] = []
    
      err.issues.forEach((issue)=>{
        errorSource.push({
          path: issue.path.join(" "),
          // issue.path.length > z ? issue.path.join(" => ") || "unknown" : issue.path[0].toString()
          // issue.path.join(" => ") || "unknown",
          message: issue.message
        })
      })

      return {
        success: false,
        errorSource,
        message,
        statusCode
      }
}