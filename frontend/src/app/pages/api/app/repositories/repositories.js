import { consult } from "../database/connection.js";

class Repositorios {
    getAllCategories() {
        const sql = 'SELECT nome FROM categorias';
        return consult(sql, 'Não foi possível consultar o banco de dados');
    }

    getNewsForHomePage() {
        const sql = 'SELECT * FROM materias ORDER BY id DESC LIMIT 9';
        return consult(sql, 'Não foi possível consultar o banco de dados.');
    }

    getAllNews() {
        const sql = 'SELECT * FROM materias';
        return consult(sql, 'Não foi possível consultar o banco de dados.');
    }

    getNewsAccordingToACategory(categoria_id) {
        const sql = 'SELECT * FROM materias WHERE categoria_id = ?';
        return consult(sql, [categoria_id], 'Não foi possível consultar o banco de dados.');        
    }

    getNews(id) {
        const sql = 'SELECT * FROM materias WHERE id = ?';
        return consult(sql, [id], 'Não foi possível consultar o banco de dados.');                
    }
}

export default new Repositorios();