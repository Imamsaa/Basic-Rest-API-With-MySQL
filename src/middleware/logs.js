const logsRequest = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    req.body = {
        name: "Imamsaa",
        email: "imamsaa@example.com",
        password: "securepassword123",
        path : req.path
    }
    next();
}

export default logsRequest;