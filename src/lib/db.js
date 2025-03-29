// src/lib/db.ts
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

//import mysql from 'mysql';

// Usar o .env
dotenv.config();

// Criação do pool de conexão
export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});