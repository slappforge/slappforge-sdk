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

import {ConfigKeys, Options, Twitter as Twt} from "twit";
import Twit = require("twit");

/**
 * @author Udith Gunaratna
 */
export class Twitter {

    /* Client creation functions */

    createClient(options: ConfigKeys): Twit;

    createAdvancedClient(advancedOptions: Options): Twit;

    /* Tweet related functions */

    getTweet(client: Twit, tweetID: string, callback: Twit.Callback);

    getTweet(client: Twit, tweetID: string): Promise<Twit.PromiseResponse>;

    postTweet(client: Twit, status: string, callback: Twit.Callback);

    postTweet(client: Twit, status: string): Promise<Twit.PromiseResponse>;

    deleteTweet(client: Twit, tweetID: string, callback: Twit.Callback);

    deleteTweet(client: Twit, tweetID: string): Promise<Twit.PromiseResponse>;

    searchTweets(client: Twit, searchParams: SearchParams, callback: Twit.Callback);

    searchTweets(client: Twit, searchParams: SearchParams): Promise<Twit.PromiseResponse>;

    /* Retweet related functions */

    listRetweets(client: Twit, tweetID: string, callback: Twit.Callback);

    listRetweets(client: Twit, tweetID: string): Promise<Twit.PromiseResponse>;

    createRetweet(client: Twit, tweetID: string, callback: Twit.Callback);

    createRetweet(client: Twit, tweetID: string): Promise<Twit.PromiseResponse>;

    deleteRetweet(client: Twit, tweetID: string, callback: Twit.Callback);

    deleteRetweet(client: Twit, tweetID: string): Promise<Twit.PromiseResponse>;

    /* Likes(favourites) related functions */

    listLikes(client: Twit, callback: Twit.Callback);

    listLikes(client: Twit): Promise<Twit.PromiseResponse>;

    createLike(client: Twit, tweetID: string, callback: Twit.Callback);

    createLike(client: Twit, tweetID: string): Promise<Twit.PromiseResponse>;

    removeLike(client: Twit, tweetID: string, callback: Twit.Callback);

    removeLike(client: Twit, tweetID: string): Promise<Twit.PromiseResponse>;

    /* Custom API related functions */

    customGetRequest(client: Twit, path: string, params: Twit.Params, callback: Twit.Callback);

    customGetRequest(client: Twit, path: string, callback: Twit.Callback);

    customGetRequest(client: Twit, path: string, params?: Twit.Params): Promise<Twit.PromiseResponse>;

    customPostRequest(client: Twit, path: string, params: Twit.Params, callback: Twit.Callback);

    customPostRequest(client: Twit, path: string, callback: Twit.Callback);

    customPostRequest(client: Twit, path: string, params?: Twit.Params): Promise<Twit.PromiseResponse>;

}

interface SearchParams {
    q?: string,
    geocode?: string,
    lang?: string,
    locale?: string,
    result_type?: Twt.ResultType,
    count?: number,
    results_per_page?: number,
    until?: string,
    since_id?: string,
    max_id?: string,
    include_entities?: boolean
}