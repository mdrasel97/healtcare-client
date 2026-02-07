/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response) => {
    try{
        const payload = req.body 

        const result = await SpecialtyService.createSpecialty(payload);
        res.status(201).json({
            success: true,
            message: "Specialty created successfully",
            data: result
        });
    }catch(error){
        res.status(500).json({ message: "Error creating specialty", error });
    }
}

const getAllSpecialties = async (req: Request, res: Response) =>{
    try{
        const specialties = await SpecialtyService.getAllSpecialties();
        res.status(200).json({
            success: true,
            message: "Specialties fetched successfully",
            data: specialties
        });
    }catch(error : any){
        res.status(500).json({ message: "Error fetching specialties", error });
    }
}

const updateSpecialty = async (req: Request, res: Response) =>{
    try{
        const {id} = req.params 
        const payload = req.body
        const result = await SpecialtyService.updateSpecialty(id as string, payload);
        res.status(200).json({
            success: true,
            message: "Specialty updated successfully",
            data: result
        });
    }catch(error : any){
        res.status(500).json({ message: "Error updating specialty", error });
    }
}

const deleteSpecialty = async (req: Request, res: Response) => {
    try{
        const {id} = req.params
        const result = await SpecialtyService.deleteSpecialty(id as string);
        res.status(200).json({
            success: true,
            message: "Specialty deleted successfully",
            data: result
        });

    }catch(error : any){
        res.status(500).json({ message: "Error deleting specialty", error });
    }
}

export const SpecialtyController = {
    createSpecialty,
    getAllSpecialties,
    updateSpecialty ,
    deleteSpecialty
}