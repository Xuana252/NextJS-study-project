import { Schema,model,models } from "mongoose";

const UserSchema = new Schema ({
    email: {
        type:String,
        unique:[true,'Email already exists!'],
        required:[true,'Email is required!'],
    },
    username: {
        type:String,
        required: [true, 'Username is required!'],
        // match: [ /^[\p{L}\p{M}\s\p{N}._-]{8,20}$/u,'Username invalid, it should contain 8-20 characters and be unique!'],
        unique: [true, 'Username already exists!']
    },
    image: {
        type:String,
    }
})

const User  = models.User||model('User',UserSchema)

export default User
