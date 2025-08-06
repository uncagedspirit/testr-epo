import express from 'express';
import { getAllAuthors } from '../controllers/author.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/authors', authMiddleware, getAllAuthors);

export default router;