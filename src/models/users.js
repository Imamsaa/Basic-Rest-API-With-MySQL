import dbpool from "../config/database.js";

const getAllUsers = async () => {
  const [rows] = await dbpool.query("SELECT * FROM users");
  return rows;
};

const createNewUsers = async (data) => {
  return await dbpool.query("INSERT INTO users (name, email, address) VALUES (?, ?, ?)", [data.name, data.email, data.address]);
}

export default { 
    getAllUsers,
    createNewUsers

};