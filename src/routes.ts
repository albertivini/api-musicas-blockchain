import { Router } from "express";
import { RegisterController } from "./controllers/registerController";

const routes = Router()

const registerController = new RegisterController()

routes.post('/register', registerController.handle)
routes.post('/login')
routes.post('/upload')
routes.get('/access/:email/:id')
routes.get('/access/:email')

export default routes