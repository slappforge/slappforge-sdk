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

let stringCommands = require('./StringCommands');
let commandsHandler = require('../CommandsHandler');
let handler = new commandsHandler();

module.exports = {

    append: function (clusterSpec, params, callback) {
        handler.execute(
            {
                type: stringCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'append'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    },

    decrby: function (clusterSpec, params, callback) {
        handler.execute(
            {
                type: stringCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'decrby'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    },

    incrby: function (clusterSpec, params, callback) {
        handler.execute(
            {
                type: stringCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'incrby'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    },

    get: function (clusterSpec, params, callback) {
        if (!clusterSpec.clusterModeEnabled) {
            stringCommands.mget(
                {
                    clusterSpec: clusterSpec,
                    params: params
                },
                (error, response, redisClient) => {
                    callback(error, response, redisClient);
                });
        } else {
            handler.execute(
                {
                    type: stringCommands,
                    clusterSpec: clusterSpec,
                    params: params,
                    operation: 'get'
                },
                (error, response, redisClient) => {
                    callback(error, response, redisClient);
                }
            );
        }
    },

    set: function (clusterSpec, params, callback) {
        if (!clusterSpec.clusterModeEnabled) {
            stringCommands.mset(
                {
                    clusterSpec: clusterSpec,
                    params: params
                },
                (error, response, redisClient) => {
                    callback(error, response, redisClient);
                });
        } else {
            handler.execute(
                {
                    type: stringCommands,
                    clusterSpec: clusterSpec,
                    params: params,
                    operation: 'set'
                },
                (error, response, redisClient) => {
                    callback(error, response, redisClient);
                }
            );
        }
    },

    setex: function (clusterSpec, params, callback) {
        handler.execute(
            {
                type: stringCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'setex'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    },

    strlen: function (clusterSpec, params, callback) {
        handler.execute(
            {
                type: stringCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'strlen'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    }

};