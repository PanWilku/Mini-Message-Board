const Router = require("express").Router;
const { getIndex } = require("../controllers/indexController");


const indexRouter = Router();

indexRouter.get("/", getIndex);





module.exports = indexRouter;