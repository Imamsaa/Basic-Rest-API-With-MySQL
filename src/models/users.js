import dbpool from "../config/database.js";

const getAllUsers = async () => {
  const [rows] = await dbpool.query("SELECT * FROM users");
  return rows;
};

export default { 
    getAllUsers 
};