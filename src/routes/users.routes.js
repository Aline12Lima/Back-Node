const { Router, request, response } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const usersControllers = require("../controllers/usersControllers");
const UsersAvatarControllers = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new usersControllers();
const uerAvatarController = new UsersAvatarControllers();

//usersRoutes.use(myMiddleware);//todas as rotas
usersRoutes.post("/", usersController.create); //middlewere para uma rota especifica
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  uerAvatarController.update
);
module.exports = usersRoutes;
