import { Request, Response } from "express"
import { catchAsync } from "../../shared/catchAsync"
import { doctorService } from "./doctor.service"
import { sendResponse } from "../../shared/sendResponse"
import status from "http-status"

const getAllDoctors = catchAsync(
    async (req: Request, res: Response) => {
        
        const result = await doctorService.getAllDoctors()

        sendResponse(res, {
            httpStatus: status.OK,
            success: true,
            message: "Doctors Fetch successfully",
            data: result,
        })
    }
) 

export const doctorController = {
    getAllDoctors
}