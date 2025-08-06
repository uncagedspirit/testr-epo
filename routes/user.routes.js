import express from 'express';
import { registerUser, updateUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/profile', (req, res) => {
    console.log(req);
    res.send('Welcome to user profile page');
});

router.post('/register', registerUser);

router.post('/update', updateUser);

router.delete('/delete/:id', async (req, res) => {
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
});


export default router;