import bcrypt from 'bcryptjs';
import {createUser, findUserByEmail, updatingUser } from '../models/user.model.js';

export const registerUser = async (req, res) => {
    try {
        const {name, email, password, gender} = req.body;
        const existin = await findUserByEmail(email);
        if (existin) {
            return res.status(400).send({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = await createUser({name, email, password:hashedPassword, gender});
        res.status(201).json({status: 'success', message: 'User registered successfully', userId : userId})
        console.log();
    }catch (err) {
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }};

    export const updateUser = async (userId, userData) => {
        const {name, email, password} = userData;
        const existingUser = await findUserByEmail(email);
        if (existingUser && existingUser.id !== userId) {
            return res.status(400).send({ message: 'Email already in use by another user' });
        }
        const updated = await updatingUser(userId, {name, email, password});
        if (updated) {
            res.status(200).json({status: 'success', message: 'User updated successfully'});
        } else {
            res.status(404).json({status: 'error', message: 'User not found'});
        }
    }

    export const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const result = await deleteUser(userId);
        if (result) {
            res.status(200).json({ status: 'success', message: 'User deleted successfully' });
        } else {
            res.status(404).json({ status: 'error', message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Failed to delete user', error: error.message });
    }
}