import repositories from "../repositories/repositories.js";

class Controladores {
    getAllCategories(req, res) {
        const row = repositories.getAllCategories();
        return res.json(row);
    }

    getNewsForHomePage(req, res) {
        const row = repositories.getNewsForHomePage();
        return res.json(row);
    }

    getAllNews(req, res) {
        const row = repositories.getAllNews();
        return res.json(row);
    }

    getNewsAccordingToACategory(req, res) {
        const { categoria_id } = req.query;
        const row = repositories.getNewsAccordingToACategory(categoria_id);
        return res.json(row);
    }

    getNews(req, res) {
        const { id } = req.query;
        const row = repositories.getNews(id);
        return res.json(row);
    }    
}

export default new Controladores();