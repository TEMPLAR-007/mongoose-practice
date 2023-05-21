import { HydratedDocument, Model } from "mongoose";

export interface IUser {
    name: string;
    email: string;
    avatar?: string;
    age: number;
};

export interface IUserMethods {
    fullName(): string;
}

// statics
export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
