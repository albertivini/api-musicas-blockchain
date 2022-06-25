import  { model , Schema } from "mongoose";
import { IUser } from "../interfaces/IUser";


const UserSchema = new Schema<IUser>({
    id: {
        type: String,
        unique: true,
    }
})

const User = model<IUser>("users", UserSchema)

export default User