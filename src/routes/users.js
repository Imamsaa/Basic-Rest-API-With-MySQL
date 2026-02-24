import express from 'express';
import userController from '../controller/users.js';

const router = express.Router();

router.get("/", userController.getAllUsers);

router.post("/", userController.createNewUsers);

export default router;