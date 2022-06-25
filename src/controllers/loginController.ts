import { Request, Response } from "express";
import { RegisterService } from "../services/registerService";

export class RegisterController {


    async handle (req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const registerService = new RegisterService()
    
            const register = await registerService.execute({ email, password})
    
            return res.status(201).json({ 
                message: register
            })
        } catch (err) {
            return res.status(400).json({
                message: err.message
            })
        }
    }
}