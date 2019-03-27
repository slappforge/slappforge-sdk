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

let async = require('async');
let stringCommands = require('./StringCommands');
let connectionManager = require('../ConnectionManager');

module.exports = function () {

    this.get = function (clusterSpec, params, callback) {
        if (!clusterSpec.clusterModeEnabled) {
            stringCommands.mget(clusterSpec, params, (error, response, redisClient) => {
                callback(error, response, redisClient);
            });
        } else {
            handleClusterMode('get', clusterSpec, params.keys, (error, response, redisClient) => {
                callback(error, response, redisClient);
            });
        }
    };

    this.set = function (clusterSpec, params, callback) {
        if (!clusterSpec.clusterModeEnabled) {
            stringCommands.mset(clusterSpec, params, (error, response, redisClient) => {
                callback(error, response, redisClient);
            });
        } else {
            handleClusterMode('set', clusterSpec, params.keyValuePairs, (error, response, redisClient) => {
                callback(error, response, redisClient);
            });
        }
    };

    this.del = function (clusterSpec, params, callback) {
        if (!clusterSpec.clusterModeEnabled) {
            stringCommands.mdel(clusterSpec, params, (error, response, redisClient) => {
                callback(error, response, redisClient);
            });
        } else {
            handleClusterMode('del', clusterSpec, params.keys, (error, response, redisClient) => {
                callback(error, response, redisClient);
            });
        }
    };

    const handleClusterMode = function (opType, clusterSpec, values, callback) {

        let counter = values.length;
        let responseArray = [], client;

        async.forEach(values, (value, callback) => {
            stringCommands[opType](clusterSpec, value, undefined, (error, response, redisClient) => {
                if (error) {
                    connectionManager.validateResponse(error.message, (destination) => {
                        if (destination) {
                            redisClient.quit();
                            stringCommands[opType](clusterSpec, value, destination, (error, response, redisClient) => {
                                if (error) {
                                    counter--;
                                    return callback(error);
                                } else {
                                    responseArray[value] = response;
                                    --counter === 0 ? client = redisClient : redisClient.quit();
                                    return callback();
                                }
                            });
                        } else {
                            counter--;
                            return callback(error);
                        }
                    });
                } else {
                    responseArray[value] = response;
                    --counter === 0 ? client = redisClient : redisClient.quit();
                    return callback();
                }
            });

        }, (error) => {
            if (error) {
                callback(error);
            } else {
                let tmpArray = [];
                values.forEach((value) => {
                    tmpArray.push(responseArray[value]);
                });
                callback(null, tmpArray, client)
            }
        });

    }

};