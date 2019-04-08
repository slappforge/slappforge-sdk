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

    sadd: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            if (error) {
                callback({error: error, result: undefined})
            } else {
                try {
                    let values = command.param.values;
                    let counter = values.length;
                    let responseArray = {};
                    values.forEach(value => {
                        redisClient.SADD(
                            command.param.key,
                            value,
                            (error, response) => {
                                responseArray[value] = {error: error, result: response};
                                if (--counter === 0)
                                    callback(responseArray, redisClient);
                            }
                        );
                    });
                } catch (error) {
                    callback(error, redisClient);
                }
            }
        });
    },

    scard: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SCARD(
                    command.param,
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
                    command.param.key,
                    command.param.values,
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
                    command.param.key,
                    command.param.values,
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
                    command.param.key,
                    command.param.values,
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
                    command.param.key,
                    command.param.values,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );

        });
    },

    sismember: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            if (error) {
                callback({error: error, result: undefined})
            } else {
                try {
                    let values = command.param.values;
                    let counter = values.length;
                    let responseArray = {};
                    values.forEach(value => {
                        redisClient.SISMEMBER(
                            command.param.key,
                            value,
                            (error, response) => {
                                responseArray[value] = {error: error, result: response};
                                if (--counter === 0)
                                    callback(responseArray, redisClient);
                            }
                        );
                    });
                } catch (error) {
                    callback(error, redisClient);
                }
            }
        });
    },

    smembers: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SMEMBERS(
                    command.param,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    srem: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            if (error) {
                callback({error: error, result: undefined})
            } else {
                try {
                    let values = command.param.values;
                    let counter = values.length;
                    let responseArray = {};
                    values.forEach(value => {
                        redisClient.SREM(
                            command.param.key,
                            value,
                            (error, response) => {
                                responseArray[value] = {error: error, result: response};
                                if (--counter === 0)
                                    callback(responseArray, redisClient);
                            }
                        );
                    });
                } catch (error) {
                    callback(error, redisClient);
                }
            }
        });
    },

    sunion: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.SUNION(
                    command.param.key,
                    command.param.values,
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
                    command.param.key,
                    command.param.values,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );

        });
    },

};