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

const createNewUsers = (req, res) => {
    res.status(200).json(
        {
            message: "Hello Users Post Method",
            data: req.body
        }
    );
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