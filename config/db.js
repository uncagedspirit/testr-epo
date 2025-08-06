import mysql from "mysql2/promise";
import dotenv from 'dotenv';
dotenv.config();

let db;
try{
     db = await mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    db.getConnection();
    console.log("Database connected successfully")
}catch(err){
    console.error("Database connection failed:", err);
}

export {db};