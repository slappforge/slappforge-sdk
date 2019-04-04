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

module.exports = {

    append: function (clusterSpec, params, callback) {
        commandsHandler.execute(
            {
                type: stringCommands,
                clusterSpec: clusterSpec,
                inputs: params.keyValuePairs,
                operation: 'append'
            },
            (response, redisClient) => {
                callback(response, redisClient);
            }
        );
    },

    get: function (clusterSpec, params, callback) {
        if (!clusterSpec.clusterModeEnabled) {
            stringCommands.mget(
                {
                    clusterSpec: clusterSpec,
                    inputs: params.keys
                },
                (response, redisClient) => {
                    callback(response, redisClient);
                });
        } else {
            commandsHandler.execute(
                {
                    type: stringCommands,
                    clusterSpec: clusterSpec,
                    inputs: params.keys,
                    operation: 'get'
                },
                (response, redisClient) => {
                    callback(response, redisClient);
                }
            );
        }
    },

    set: function (clusterSpec, params, callback) {
        if (!clusterSpec.clusterModeEnabled) {
            stringCommands.mset(
                {
                    clusterSpec: clusterSpec,
                    inputs: params.keyValuePairs
                },
                (response, redisClient) => {
                    callback({results: response}, redisClient);
                });
        } else {
            commandsHandler.execute(
                {
                    type: stringCommands,
                    clusterSpec: clusterSpec,
                    inputs: params.keyValuePairs,
                    operation: 'set'
                },
                (response, redisClient) => {
                    callback(response, redisClient);
                }
            );
        }
    },

    setex: function (clusterSpec, params, callback) {
        commandsHandler.execute(
            {
                type: stringCommands,
                clusterSpec: clusterSpec,
                inputs: params.keyValuePairs,
                operation: 'setex'
            },
            (response, redisClient) => {
                callback(response, redisClient);
            }
        );
    },

};