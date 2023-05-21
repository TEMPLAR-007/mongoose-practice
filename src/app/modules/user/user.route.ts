import express from "express";
import { createUser, getAdminUsers, getUser, getUsers } from "./user.controller";


const router = express.Router()

router.get('/', getUsers);
router.get('/admins', getAdminUsers);
router.get('/:name', getUser);
router.post('/create-user', createUser);

export default router