import mysql from 'mysql';
import dotenv from 'dotenv';

// Usar o .env
dotenv.config();

// Dados do banco de dados e de usuário para conexão e autenticação, para poder consumir dados
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

/** JSDOC
 * Execute código SQL com ou sem valores
 * @param {*string} sql Declaração SQL para ser executada
 * @param {*string} values Valores para serem passados para o comando SQL
 * @param {*string} rejectionMessage Mensagem a ser exibida
 * @returns Objeto da promessa
 */

// Função universal para qualquer comando SQL
export const consult = (sql, values = "", rejectionMessage) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (error, result) => {
            if (error) return reject(rejectionMessage);
            const row = JSON.parse(JSON.stringify(result));
            return resolve(row);
        });
    });
};

export default connection;
