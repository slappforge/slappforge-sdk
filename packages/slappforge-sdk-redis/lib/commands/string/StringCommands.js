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
            error ? callback({error: error, result: undefined}) :
                redisClient.APPEND(
                    command.input.key,
                    command.input.value,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    decrby: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.DECRBY(
                    command.input.key,
                    command.input.decrement,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    incrby: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.INCRBY(
                    command.input.key,
                    command.input.increment,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    get: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.GET(
                    command.input,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    set: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SET(
                    command.input.key,
                    command.input.value,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    setex: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SETEX(
                    command.input.key,
                    command.input.seconds,
                    command.input.value,
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
                    command.inputs,
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
                                    success: command.inputs.length,
                                    failed: 0
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
        command.inputs.forEach((keyValuePair) => {
            values.push(keyValuePair.key);
            values.push(keyValuePair.value);
        });
        connectionManager.connect(command.clusterSpec, undefined, (error, redisClient) => {
            error ? callback(error, {result: undefined}, redisClient) :
                redisClient.MSET(
                    values,
                    (error, response) => {
                        callback(error, {results: response}, redisClient);
                    }
                );
        });
    },

};