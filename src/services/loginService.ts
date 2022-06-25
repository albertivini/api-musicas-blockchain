import { IRegisterService } from "../interfaces/IRegister";
import User from "../schemas/userSchema";
import { compare } from "bcryptjs"


export class LoginService {

    async execute({ email, password }: IRegisterService) {

        const register = await User.findOne({ email })

        if (!register) {
            throw new Error('User does not exists')
        }

        const compare_passwords = compare(password, register.password)

        if (!compare_passwords) {
            throw new Error('Incorrect Password')
        }

        return register._id

    }
}