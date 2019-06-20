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

/**
 * @author Lahiru Ananda
 */

let connectionManager = require('../../ConnectionManager');

module.exports = {

    append: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: null}) :
                redisClient.APPEND(
                    command.param.key,
                    command.param.value,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    decrby: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: null}) :
                redisClient.DECRBY(
                    command.param.key,
                    command.param.decrement,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    incrby: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: null}) :
                redisClient.INCRBY(
                    command.param.key,
                    command.param.increment,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    get: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: null}) :
                redisClient.GET(
                    command.param,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    set: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: null}) :
                redisClient.SET(
                    command.param.key,
                    command.param.value,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    setex: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: null}) :
                redisClient.SETEX(
                    command.param.key,
                    command.param.seconds,
                    command.param.value,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    strlen: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: null}) :
                redisClient.STRLEN(
                    command.param,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    mget: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback(error) :
                redisClient.MGET(
                    command.params,
                    (error, response) => {
                        if (error)
                            callback(error);
                        else {
                            const results = response.map(value => {
                                return {
                                    error: error,
                                    result: value
                                };
                            });
                            callback(
                                undefined,
                                {
                                    results: results,
                                    success: command.params ? command.params.length : undefined,
                                    failed: command.params ? 0 : undefined
                                },
                                redisClient
                            );
                        }
                    }
                );
        });
    },

    mset: function (command, callback) {
        let values = [];
        command.params.forEach((keyValuePair) => {
            values.push(keyValuePair.key);
            values.push(keyValuePair.value);
        });
        connectionManager.connect(command.clusterSpec, undefined, (error, redisClient) => {
            error ? callback(error, {result: null}, redisClient) :
                redisClient.MSET(
                    values,
                    (error, response) => {
                        callback(error, {results: response}, redisClient);
                    }
                );
        });
    },

};