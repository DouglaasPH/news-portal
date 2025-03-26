import { Router } from "express";
import controller from "./controllers/controller.js";

const router = Router();

// Rotas para consumir dados do banco de dados
router.get("api/getAllCategories", controller.getAllCategories);
router.get("api/getAllNews", controller.getAllNews);
router.get("api/getNews", controller.getNews);
router.get("api/getNewsAccordingToACategory", controller.getNewsAccordingToACategory);
router.get("api/getNewsForHomePage", controller.getNewsForHomePage);

export default router;