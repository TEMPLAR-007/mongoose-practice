import { NextFunction, Request, Response } from "express";
import { createUserToDb, getAdminUserFromDb, getuserByName, getusersFromDb } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    const user = await createUserToDb(data)
    res.status(200).json({
        status: 'success',
        data: user
    });
};


export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getusersFromDb()
    res.status(200).json({
        status: 'success',
        data: user
    });
};


export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params;

    const user = await getuserByName(name)
    res.status(200).json({
        status: 'success',
        data: user
    });
};


export const getAdminUsers = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getAdminUserFromDb()
    res.status(200).json({
        status: 'success',
        data: user
    });
};
