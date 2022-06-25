import mongoose, { Schema } from "mongoose"
import "./configs/mongoConnection"

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
    }
)

const UserModel = mongoose.model('User', UserSchema)

export default UserModel

