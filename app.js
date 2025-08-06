import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import authorRoutes from './routes/authors.routes.js';
import  {db}  from './config/db.js';

import cors from 'cors';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());    //middleware


app.use('/api/v1', authRoutes);
app.use('/api/v1/users', userRoutes);

app.use('/pubs', authorRoutes);


export default app;