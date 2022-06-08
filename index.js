import express from 'express';
import dotenv from 'dotenv'
import nodeFetch from 'node-fetch'
import { createApi } from 'unsplash-js';


const app = express()
dotenv.config()
//global.fetch = nodeFetch;
const port = process.env.PORT || 5000

const unsplash = createApi({ 
   accessKey: process.env.KEY,
   fetch: nodeFetch 
});

// non-feed example
/* unsplash.photos.get({ photoId: 'foo' }).then(result => {
   if (result.errors) {
      // handle error here
      console.log('error occurred: ', result.errors[0]);
   } else {
      // handle success here
      const photo = result.response;
      console.log(photo);
   }
}); */

let test = {};
let a = []
unsplash.photos.list({ page: 1, perPage: 5 }).then(res => {
   test = {...res.response};
   a = [...res.response.results];
   //console.log(res.response);
});


app.get('/', (req, res) => {
   console.log(a[0]);
   res.send(a[0]);

})

app.listen(port, () => console.log('> Server is up and running on port : ' + port))