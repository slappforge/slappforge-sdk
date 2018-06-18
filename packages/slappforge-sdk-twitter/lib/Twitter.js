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

let Twit = require("twit");

/**
 * @author Udith Gunaratna
 */
module.exports = function () {

    /* Client creation functions */

    this.createClient = function (options) {
        return new Twit(configKeys);
    };

    this.createAdvancedClient = function (advancedOptions) {
        return new Twit(options);
    };

    /* Tweet related functions */

    this.getTweet = function (client, tweetID, callback) {
        client.get('statuses/show/:id', {id: tweetID}, callback);
    };

    this.getTweet = function (client, tweetID) {
        return client.get('statuses/show/:id', {id: tweetID});
    };

    this.postTweet = function (client, status, callback) {
        client.post('statuses/update', {status: status}, callback);
    };

    this.postTweet = function (client, status) {
        return client.post('statuses/update', {status: status});
    };

    this.deleteTweet = function (client, tweetID, callback) {
        client.post('statuses/destroy/:id', {id: tweetID}, callback);
    };

    this.deleteTweet = function (client, tweetID) {
        return client.post('statuses/destroy/:id', {id: tweetID});
    };

    this.searchTweets = function (client, searchParams, callback) {
        client.get('search/tweets', searchParams, callback);
    };

    this.searchTweets = function (client, searchParams) {
        return client.get('search/tweets', searchParams);
    };

    /* Retweet related functions */

    this.listRetweets = function (client, tweetID, callback) {
        client.get('statuses/retweets/:id', {id: tweetID}, callback);
    };

    this.listRetweets = function (client, tweetID) {
        return client.get('statuses/retweets/:id', {id: tweetID});
    };

    this.createRetweet = function (client, tweetID, callback) {
        client.post('statuses/retweet/:id', {id: tweetID}, callback);
    };

    this.createRetweet = function (client, tweetID) {
        return client.post('statuses/retweet/:id', {id: tweetID});
    };

    this.deleteRetweet = function (client, tweetID, callback) {
        client.post('statuses/unretweet/:id', {id: tweetID}, callback);
    };

    this.deleteRetweet = function (client, tweetID) {
        return client.post('statuses/unretweet/:id', {id: tweetID});
    };

    /* Likes(favourites) related functions */

    this.listLikes = function (client, callback) {
        client.get('favorites/list', callback);
    };

    this.listLikes = function (client) {
        return client.get('favorites/list');
    };

    this.createLike = function (client, tweetID, callback) {
        client.post('favorites/create', {id: tweetID}, callback);
    };

    this.createLike = function (client, tweetID) {
        return client.post('favorites/create', {id: tweetID});
    };

    this.removeLike = function (client, tweetID, callback) {
        client.post('favorites/destroy', {id: tweetID}, callback);
    };

    this.removeLike = function (client, tweetID) {
        return client.post('favorites/destroy', {id: tweetID});
    };

    /* Custom API related functions */

    this.customGetRequest = function (client, path, params, callback) {
        client.get(path, params, callback);
    };

    this.customGetRequest = function (client, path, callback) {
        client.get(path, callback);
    };

    this.customGetRequest = function (client, path, params) {
        return client.get(path, params);
    };

    this.customPostRequest = function (client, path, params, callback) {
        client.post(path, params, callback);
    };

    this.customPostRequest = function (client, path, callback) {
        client.post(path, callback);
    };

    this.customPostRequest = function (client, path, params) {
        client.post(path, params);
    };

};