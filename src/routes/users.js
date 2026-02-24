import express from 'express';
import userController from '../controller/users.js';

const router = express.Router();

router.get("/",  userController.getAllUsers);

router.post("/", userController.createNewUsers);

router.patch("/:id", userController.updateUsers);

export default router;