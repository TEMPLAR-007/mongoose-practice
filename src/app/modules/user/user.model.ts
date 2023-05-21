import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";


// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String,
    age: { type: Number, required: true }
});

userSchema.method('fullName', function fullName() {
    return this.name;
});


userSchema.static('getAdminUsers', async function getAdminUsers() {
    const admin = await this.find({ role: 'admin' })
});

// 3. Create a Model.
const User = model<IUser, UserModel>('User', userSchema);


export default User;