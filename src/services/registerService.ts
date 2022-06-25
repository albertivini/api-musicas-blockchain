import { IRegisterService } from "../interfaces/IRegister";
import User from "../schemas/userSchema";
import { hash } from "bcryptjs"
import { v4 as uuid } from "uuid"


export class RegisterService {

    async execute({ email, password }: IRegisterService) {

        const hasRegister = await User.findOne({ email })

        if (hasRegister) {
            throw new Error('User already exists')
        }

        const hashPassword = await hash(password, 10)

        const register = await User.create({
            id: uuid(),
            email,
            password: hashPassword
        })

        return register
    }
}