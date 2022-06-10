import nodeFetch from 'node-fetch'
import { createApi } from 'unsplash-js';
import dotenv from 'dotenv';

dotenv.config();


const unsplash = createApi({
    accessKey: process.env.KEY,
    fetch: nodeFetch
});

export const homeController = (req, res, next) => {
    let result = [];

    unsplash.photos.list({ page: 1, perPage: 5 }).then((ressponse) => {
        result = [...ressponse.response.results];
        //console.log(result);
        res.send(result);
    });
}

export const searchController = (req, res, next) => {
    let keywork = req.params.key;

    unsplash.search.getPhotos({
        query: keywork,
        page: 5,
        perPage: 15
    })
    .then((response) => {
        console.log(response);
        res.send(response);
    });
}

export const searchColletionController = (req, res, next) => {
    let key = req.params.key;

    unsplash.search.getCollections({
        query: key,
        page: 4,
        perPage: 15
    })
    .then((response) => {
        console.log(response);
        res.send(response);
    });
}

export const searchTopicController = (req, res, next) => {
    let key = req.params.key;
    
    unsplash.topics.getPhotos({
        topicIdOrSlug: key,
        page: 4,
        perPage: 15,
        orderBy: 'latest'
    })
    .then((response) => {
        //console.log(response);
        res.send(response);
    });
}
export const getRelatedController = (req, res, next) => {
    let id = req.params.id;

    unsplash.collections.getRelated({
        collectionId: id
    })
    .then((response) => {
        res.send(response);
    });
}
export const getAllTopics = (req, res, next) => {
    unsplash.topics.list({
        page: 1,
        perPage: 50
    }).then((response) => {
        res.send(response);
    });
}

export const getAllCollectios = (req, res, next) => {
    unsplash.collections.list({
        page: 1,
        perPage: 50
    }).then((response) => {
        res.send(response);
    });
}

export const errorController = (req, res, next) => {
    res.send("something were wrong!");
};