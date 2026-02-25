import userModel from "../models/users.js";

const getAllUsers = async (req, res) => {
    try {
        const data = await userModel.getAllUsers();
        res.status(200).json({
            message: "Hello Users Get Method Data Successfully",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            error: "Failed to retrieve users",
            details: error.message
        });
    }
}

const createNewUsers = async (req, res) => {
    try {
        const result = await userModel.createNewUsers(req.body);
        res.status(201).json({
            message: "User created successfully",
            data: req.body
        });
    } catch (error) {
        res.status(500).json({
            error: "Failed to create user",
            details: error.message
        });
    }
}

const updateUsers = (req, res) => {
    res.status(200).json(
        {
            id : req.params.id,
            message: "Hello Users Put Method",
            data: req.body
        })
}

const deleteUsers = (req, res) => {
    res.status(200).json(
        {
            id: req.params.id,
            message: "Hello Users Delete Method",
            data : {
                id: req.params.id,
                name: "Imamsaa",
                email: "imamsaa@example.com",
                password: "securepassword123"
            }
        })
}

export default{
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers
}