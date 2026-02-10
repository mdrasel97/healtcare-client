/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IErrorSource {
  path: string;
  message: string
}

export interface TErrorResponse {
  success: boolean;
  message: string;
  errorSource?: IErrorSource[]
  error?: any
  statusCode?: number
}