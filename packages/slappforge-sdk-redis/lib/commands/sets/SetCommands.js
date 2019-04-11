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

const HASH_SLOT = '{hash-slot-identifier}';

module.exports = {

    sadd: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SADD(
                    `${HASH_SLOT}${command.param.key}`,
                    command.param.value,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    scard: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SCARD(
                    `${HASH_SLOT}${command.param}`,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    sdiff: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SDIFF(
                    `${HASH_SLOT}${command.param.key}`,
                    command.param.values.map((value) => {
                        return `${HASH_SLOT}${value}`
                    }),
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );

        });
    },

    sdiffstore: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SDIFFSTORE(
                    `${HASH_SLOT}${command.param.key}`,
                    command.param.values.map((value) => {
                        return `${HASH_SLOT}${value}`
                    }),
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );

        });
    },

    sinter: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SINTER(
                    `${HASH_SLOT}${command.param.key}`,
                    command.param.values.map((value) => {
                        return `${HASH_SLOT}${value}`
                    }),
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    sinterstore: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SINTERSTORE(
                    `${HASH_SLOT}${command.param.key}`,
                    command.param.values.map((value) => {
                        return `${HASH_SLOT}${value}`
                    }),
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );

        });
    },

    sismember: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SISMEMBER(
                    `${HASH_SLOT}${command.param.key}`,
                    command.param.value,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    smembers: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SMEMBERS(
                    `${HASH_SLOT}${command.param}`,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    smove: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SMOVE(
                    `${HASH_SLOT}${command.param.key}`,
                    `${HASH_SLOT}${command.param.destination}`,
                    command.param.value,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    srem: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SREM(
                    `${HASH_SLOT}${command.param.key}`,
                    command.param.value,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    sunion: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SUNION(
                    `${HASH_SLOT}${command.param.key}`,
                    command.param.values.map((value) => {
                        return `${HASH_SLOT}${value}`
                    }),
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );

        });
    },

    sunionstore: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SUNIONSTORE(
                    `${HASH_SLOT}${command.param.key}`,
                    command.param.values.map((value) => {
                        return `${HASH_SLOT}${value}`
                    }),
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );

        });
    },

};