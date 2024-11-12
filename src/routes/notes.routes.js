const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesRoutes = Router();

const notesController = new NotesController();
notesRoutes.use(ensureAuthenticated);

//usersRoutes.use(myMiddleware);//todas as rotas
notesRoutes.post("/", notesController.create); //middlewere para uma rota especifica
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);
notesRoutes.get("/", notesController.index);

module.exports = notesRoutes;
