import express from "express";
import { errorController, getAllCollectios, getAllTopics, getRelatedController, homeController, searchColletionController, searchController, searchTopicController } from "./controller/Controller.js";
const route = express.Router();

route.get('/', homeController);

route.get('/search/:key', searchController);
route.get('/search-collections/:key', searchColletionController);
route.get('/search-topic/:key', searchTopicController);
route.get('/all-collections', getAllCollectios);
route.get('/all-topics', getAllTopics);
route.get('/retrive-collection/:id', getRelatedController);

route.get('*', errorController);

export default route;