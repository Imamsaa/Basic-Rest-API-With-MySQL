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

const updateUsers = async (req, res) => {
    try {
        const oldData = await userModel.getAllUsers(req.params.id);
        if (oldData.length === 0) {
            res.status(404).json({
                error: "User not found"
            });
        }else{
            const name = req.body.name || oldData[0].name;
            const email = req.body.email || oldData[0].email;
            const address = req.body.address || oldData[0].address;
            const updatedData = { name, email, address };
            const result = await userModel.updateUsers(req.params.id, updatedData);
            res.status(200).json({
                message: "User updated successfully",
                data: updatedData
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Failed to update user",
            details: error.message
        });
    }
}

const deleteUsers = async (req, res) => {
    try {
        const result = await userModel.deleteUsers(req.params.id);
        res.status(200).json({
            id: req.params.id,
            message: "User deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: "Failed to delete user",
            details: error.message
        });
    }
}

export default{
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers
}