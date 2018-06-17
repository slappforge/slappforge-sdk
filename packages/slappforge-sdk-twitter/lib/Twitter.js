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

    this.postTweet = function (client, status, callback) {
        client.post('statuses/update', {status: status}, callback);
    };

    this.deleteTweet = function (client, tweetID, callback) {
        client.post('statuses/destroy/:id', {id: tweetID}, callback);
    };
    
    this.searchTweets = function (client, searchParams, callback) {
        client.get('search/tweets', searchParams, callback);
    };

    /* Retweet related functions */

    this.listRetweets = function (client, tweetID, callback) {
        client.get('statuses/retweets/:id', {id: tweetID}, callback);
    };

    this.createRetweet = function (client, tweetID, callback) {
        client.post('statuses/retweet/:id', {id: tweetID}, callback);
    };

    this.deleteRetweet = function (client, tweetID, callback) {
        client.post('statuses/unretweet/:id', {id: tweetID}, callback);
    };

    /* Likes(favourites) related functions */

    this.listLikes = function (client, callback) {
        client.get('favorites/list', callback);
    };

    this.createLike = function (client, tweetID, callback) {
        client.post('favorites/create', {id: tweetID}, callback);
    };

    this.removeLike = function (client, tweetID, callback) {
        client.post(' favorites/destroy', {id: tweetID}, callback);
    };

};