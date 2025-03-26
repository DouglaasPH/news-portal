import express from "express";
import router from "./router.js";

const app = express();

// Indica para o Express ler no formato JSON
app.use(express.json());

// Linkar rotas à API
app.use(router);

export default app;