import express from "express";
import { errorController, homeController, searchColletionController, searchController, searchTopicController } from "./controller/Controller.js";
const route = express.Router();

route.get('/', homeController);

route.get('/search/:key', searchController);
route.get('/search-collections/:key', searchColletionController);
route.get('/search-topic/:key', searchTopicController);

route.get('*', errorController);

export default route;