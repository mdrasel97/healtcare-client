import z from "zod";
import { Gender } from "../../../generated/prisma/enums";

export const createDoctorZodSchema = z.object({
    password : z.string("password is required").min(6, "password must be a at least 5 characters").max(20),

    doctor: z.object({
    name: z.string("name is required").min(5, "name must be a at least 5 characters").max(50, "name must e a most 50 characters"),
    email: z.email("invalid email address"),
    contactNumber: z.string().min(11, "contact number must be 11 characters").max(14),
    address: z.string("address is required").min(10, "address must be 10 characters").max(100, "address must be a 100 Characters").optional(),
    registrationNumber: z.string("Registration number is required"),
    experience: z.int("experience must be a number").nonnegative().optional(),
    
    gender : z.enum([Gender.MALE, Gender.FEMALE], "gender must be male or female"),
    appointmentFee: z.number("appointment fee must be a number").nonnegative(),
    qualification: z.string("Qualification is required").min(2, "Current working place").max(50),
    currentWordingPlace: z.string("currentWordingPlace is must be required").min(2).max(50),
    designation : z.string("Designation is must required ").min(2).max(50),

    }),
    specialties: z.array(z.uuid(),"specialties must be array of string ").min(1)
    
})