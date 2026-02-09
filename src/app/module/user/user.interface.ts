/* eslint-disable @typescript-eslint/no-explicit-any */


import { Gender } from "../../../generated/prisma/enums";

export interface ICreateDoctorPayload{
[x: string]: any;
password: string;
doctor: {
    name: string;
    email: string;
    profilePhoto?: string;
    contactNumber?: string;
    address?: string
    registrationNumber: string
    experience?: number;
    gender: Gender;
    appointmentFee: number;
    qualification: string;
    currentWordingPlace: string
    designation: string
},
specialty : string[]
}