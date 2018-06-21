/*
 * Copyright (c) 2017-2018 SLAppForge Lanka Private Ltd. (https://www.slappforge.com).
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let Twitter = require("./Twitter");
let twitter = new Twitter();

/**
 * @author Udith Gunaratna
 */
module.exports = function (clients) {

    let twitterClients = clients || {};

    /* Client creation functions */

    this.createClient = function (options) {
        return twitter.createClient(options);
    };

    this.createAdvancedClient = function (advancedOptions) {
        return twitter.createAdvancedClient(advancedOptions);
    };

    /* Tweet related functions */

    this.getTweet = function (params) {
        return getClientAndExecute(params, (client) => client.get('statuses/show/:id', {id: params['tweetID']}));
    };

    this.postTweet = function (params) {
        return getClientAndExecute(params, (client) => client.post('statuses/update', {status: params['status']}));
    };

    this.deleteTweet = function (params) {
        return getClientAndExecute(params, (client) => client.post('statuses/destroy/:id', {id: params['tweetID']}));
    };

    this.searchTweets = function (params) {
        return getClientAndExecute(params, (client) => client.get('search/tweets', params['searchParams']));
    };

    /* Retweet related functions */

    this.listRetweets = function (params) {
        return getClientAndExecute(params, (client) => client.get('statuses/retweets/:id', {id: params['tweetID']}));
    };

    this.createRetweet = function (params) {
        return getClientAndExecute(params, (client) => client.post('statuses/retweet/:id', {id: params['tweetID']}));
    };

    this.deleteRetweet = function (params) {
        return getClientAndExecute(params, (client) => client.post('statuses/unretweet/:id', {id: params['tweetID']}));
    };

    /* Likes(favourites) related functions */

    this.listLikes = function (params) {
        return getClientAndExecute(params, (client) => client.get('favorites/list'));
    };

    this.createLike = function (params) {
        return getClientAndExecute(params, (client) => client.post('favorites/create', {id: params['tweetID']}));
    };

    this.removeLike = function (params) {
        return getClientAndExecute(params, (client) => client.post('favorites/destroy', {id: params['tweetID']}));
    };

    /* Custom API related functions */

    this.customGetRequest = function (params) {
        return getClientAndExecute(params, (client) => {
            let path = params['path'];
            let opParams = params['params'];
            return (opParams) ? client.get(path, opParams) : client.get(path);
        });
    };

    this.customPostRequest = function (params) {
        return getClientAndExecute(params, (client) => {
            let path = params['path'];
            let opParams = params['params'];
            return (opParams) ? client.post(path, opParams) : client.get(path);
        });
    };

    function getClientAndExecute(params, executable) {
        let clientName = params['clientName'];
        let client = twitterClients[clientName];
        if (client) {
            return executable(client);
        } else {
            return Promise.reject(`Client ${clientName} does not exists`);
        }
    }

};