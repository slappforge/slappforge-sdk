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

let setCommands = require('./SetCommands');
let commandsHandler = require('../CommandsHandler');

module.exports = {

    sadd: function (clusterSpec, params, callback) {
        commandsHandler.run(
            {
                type: setCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'sadd'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    },

    scard: function (clusterSpec, params, callback) {
        commandsHandler.run(
            {
                type: setCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'scard'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    },

    sdiff: function (clusterSpec, params, callback) {
        commandsHandler.run(
            {
                type: setCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'sdiff'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    },

    sdiffstore: function (clusterSpec, params, callback) {
        commandsHandler.run(
            {
                type: setCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'sdiffstore'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    },

    sinter: function (clusterSpec, params, callback) {
        commandsHandler.run(
            {
                type: setCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'sinter'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    },

    sinterstore: function (clusterSpec, params, callback) {
        commandsHandler.run(
            {
                type: setCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'sinterstore'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    },

    sismember: function (clusterSpec, params, callback) {
        commandsHandler.run(
            {
                type: setCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'sismember'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    },

    smembers: function (clusterSpec, params, callback) {
        commandsHandler.run(
            {
                type: setCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'smembers'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    },

    srem: function (clusterSpec, params, callback) {
        commandsHandler.run(
            {
                type: setCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'srem'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    },

    sunion: function (clusterSpec, params, callback) {
        commandsHandler.run(
            {
                type: setCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'sunion'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    },

    sunionstore: function (clusterSpec, params, callback) {
        commandsHandler.run(
            {
                type: setCommands,
                clusterSpec: clusterSpec,
                params: params,
                operation: 'sunionstore'
            },
            (error, response, redisClient) => {
                callback(error, response, redisClient);
            }
        );
    }

};