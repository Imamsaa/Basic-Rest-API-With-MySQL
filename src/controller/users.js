const getAllUsers = (req, res) => {
    res.status(200).json(
        {
            message: "Hello Users Get Method"
        }
    );
}

const createNewUsers = (req, res) => {
    res.status(200).json(
        {
            message: "Hello Users Post Method"
        }
    );
}

export default{
    getAllUsers,
    createNewUsers
}