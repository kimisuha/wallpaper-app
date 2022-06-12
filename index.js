import express from 'express';
import dotenv from 'dotenv'
/* import nodeFetch from 'node-fetch'
import { createApi } from 'unsplash-js'; */
import route from './route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
const port = process.env.PORT || 5000;

/* const unsplash = createApi({ 
   accessKey: process.env.KEY,
   fetch: nodeFetch 
}); */


app.use(route);
/* let test = {};
let a = []
unsplash.photos.list({ page: 1, perPage: 5 }).then(res => {
   test = {...res.response};
   a = [...res.response.results];
   //console.log(res.response);
});


app.get('/', (req, res) => {
   console.log(a[0]);
   res.send(a[0]);

}) */

app.listen(port, () => console.log('> Server is up and running on port : ' + port))