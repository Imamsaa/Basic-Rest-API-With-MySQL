const getAllUsers = (req, res) => {
    const data = {
        id: 1,
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