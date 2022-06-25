import { Request, Response } from "express";
import { LoginService } from "../services/loginService";

export class RegisterController {


    async handle (req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const login_service = new LoginService()
    
            const id = await login_service.execute({ email, password})
    
            return res.status(201).json({ 
                message: id
            })
        } catch (err) {
            return res.status(400).json({
                message: err.message
            })
        }
    }
}