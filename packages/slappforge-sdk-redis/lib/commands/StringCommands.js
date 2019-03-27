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

let connectionManager = require('../ConnectionManager');

module.exports = {

    get: function (clusterSpec, key, destination, callback) {
        connectionManager.connect(clusterSpec, destination, (error, redisClient) => {
            error ? callback(error) :
                redisClient.GET(
                    key,
                    (error, response) => {
                        callback(error, response, redisClient);
                    }
                );
        });
    },

    mget: function (clusterSpec, params, callback) {
        connectionManager.connect(clusterSpec, undefined, (error, redisClient) => {
            error ? callback(error) :
                redisClient.MGET(
                    params.keys,
                    (error, response) => {
                        callback(error, response, redisClient);
                    }
                );
        });
    },

    set: function (clusterSpec, keyValuePair, destination, callback) {
        connectionManager.connect(clusterSpec, destination, (error, redisClient) => {
            error ? callback(error) :
                redisClient.SET(
                    keyValuePair.key,
                    keyValuePair.value,
                    (error, response) => {
                        callback(error, response, redisClient);
                    }
                );
        });
    },

    mset: function (clusterSpec, params, callback) {
        let values = [];
        params.keyValuePairs.forEach((keyValuePair) => {
            values.push(keyValuePair.key);
            values.push(keyValuePair.value);
        });
        connectionManager.connect(clusterSpec, undefined, (error, redisClient) => {
            error ? callback(error) :
                redisClient.MSET(
                    values,
                    (error, response) => {
                        callback(error, response, redisClient);
                    }
                );
        });
    },

    del: function (clusterSpec, key, destination, callback) {
        connectionManager.connect(clusterSpec, destination, (error, redisClient) => {
            error ? callback(error) :
                redisClient.DEL(
                    key,
                    (error, response) => {
                        callback(error, response, redisClient);
                    }
                );
        });
    },

    mdel: function (clusterSpec, params, callback) {
        connectionManager.connect(clusterSpec, undefined, (error, redisClient) => {
            error ? callback(error) :
                redisClient.DEL(
                    params.keys,
                    (error, response) => {
                        callback(error, response, redisClient);
                    }
                );
        });
    }

};