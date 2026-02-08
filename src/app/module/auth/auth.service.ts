
import { auth } from "../../lib/auth";





interface IRegisterPatientPayload {
    name: string;
    email: string;
    password: string;
}

const registerPatient = async (payload : IRegisterPatientPayload) => {
const {name, email, password} = payload

const data = await auth.api.signUpEmail({
    body: {
        name,
        email,
        password,
        // needPasswordChange: false,
        // role: Role.PATIENT

    }
})

if (!data.user) {
    throw new Error("Failed to register user")
}

// const patient = await prisma.$transaction(async (tx) => {
// await tx.
// })

// return {
//     user: data.user
// }
return data
}

export const authService = {
    registerPatient
}