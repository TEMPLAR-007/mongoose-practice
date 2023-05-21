import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload);
    await user.save();

    // custom instance method
    user.fullName()
    return user;
};

export const getusersFromDb = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}


export const getuserByName = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ name: payload }, { email: 1, age: 1 });
    return user;
}


export const getAdminUserFromDb = async () => {
    const admins = await User.getAdminUsers();
    return admins;
}