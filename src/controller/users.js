const getAllUsers = (req, res) => {
    const data = {
        name: "Imamsaa",
        email: "imamsaa@example.com",
        password: "securepassword123"
    }
    res.status(200).json(
        {
            message: "Hello Users Get Method Data Successfully",
            data: data
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