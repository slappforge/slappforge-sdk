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

import {ConfigKeys, Options} from "twit";
import Twit = require("twit");
import {SearchParams} from "./Twitter";

/**
 * @author Udith Gunaratna
 */
export class TwitterP {

    constructor(clients: Map<string, Twit>);

    /* Client creation functions */

    createClient(options: ConfigKeys): Twit;

    createAdvancedClient(advancedOptions: Options): Twit;

    /* Tweet related functions */

    getTweet(params: TweetIDParams): Promise<Twit.PromiseResponse>;

    postTweet(params: PostTweetParams): Promise<Twit.PromiseResponse>;

    deleteTweet(params: TweetIDParams): Promise<Twit.PromiseResponse>;

    searchTweets(params: SearchTweetParams): Promise<Twit.PromiseResponse>;

    /* Retweet related functions */

    listRetweets(params: TweetIDParams): Promise<Twit.PromiseResponse>;

    createRetweet(params: TweetIDParams): Promise<Twit.PromiseResponse>;

    deleteRetweet(params: TweetIDParams): Promise<Twit.PromiseResponse>;

    /* Likes(favourites) related functions */

    listLikes(params: ClientNameParams): Promise<Twit.PromiseResponse>;

    createLike(params: TweetIDParams): Promise<Twit.PromiseResponse>;

    removeLike(params: TweetIDParams): Promise<Twit.PromiseResponse>;

    /* Custom API related functions */

    customGetRequest(params: CustomAPIParams): Promise<Twit.PromiseResponse>;

    customPostRequest(params: CustomAPIParams): Promise<Twit.PromiseResponse>;

}

interface ClientNameParams {
    clientName: string
}

interface TweetIDParams {
    clientName: string,
    tweetID: string
}

interface PostTweetParams {
    clientName: string,
    status: string
}

interface SearchTweetParams {
    clientName: string,
    searchParams: SearchParams
}

interface CustomAPIParams {
    clientName: string,
    path: string,
    params?: any
}