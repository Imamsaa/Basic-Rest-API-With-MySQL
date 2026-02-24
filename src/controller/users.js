const getAllUsers = (req, res) => {
    res.status(200).json(
        {
            message: "Hello Users Get Method",
            data: req.body
        }
    );
}

const createNewUsers = (req, res) => {
    res.status(200).json(
        {
            message: "Hello Users Post Method",
            data: req.body
        }
    );
}

export default{
    getAllUsers,
    createNewUsers
}