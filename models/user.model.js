import {db} from '../config/db.js';

export const createUser = async (userData) => {
    const {name, email, password, gender} = userData;
    const query = 'INSERT INTO users (name, email, password, gender) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(query, [name, email, password, gender]);
    return result.insertId;
}

export const findUserByEmail = async (email) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await db.execute(query, [email]);
    return rows.length > 0 ? rows[0] : null;
}

export const fetchAllUsers = async () => {
    const query = 'SELECT * FROM users';
    const [rows] = await db.execute(query);
    return rows;
}

export const updatingUser = async (userId, userData) => {
    const {name, email, password} = userData;
    const query = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
    const [result] = await db.query(query, [name, email, password, userId]);
    return result.affectedRows > 0;
}

export const deleteUser = async (userId) => {
    const query = 'DELETE FROM users WHERE id = ?';
    const [result] = await db.query(query, [userId]);
    return result.affectedRows > 0;
}