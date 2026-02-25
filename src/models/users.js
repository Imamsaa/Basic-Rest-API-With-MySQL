import dbpool from "../config/database.js";

const getAllUsers = async () => {
  const [rows] = await dbpool.query("SELECT * FROM users");
  return rows;
};

const createNewUsers = async (data) => {
  return await dbpool.query("INSERT INTO users (name, email, address) VALUES (?, ?, ?)", [data.name, data.email, data.address]);
}

const updateUsers = async (id, data) => {
  return await dbpool.query(`UPDATE users SET name = ?, email = ?, address = ? WHERE id = ?`, [data.name, data.email, data.address, id]);
}

const deleteUsers = async (id) => {
  return await dbpool.query(`DELETE FROM users WHERE id = ?`, [id]);
}

export default { 
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers
};