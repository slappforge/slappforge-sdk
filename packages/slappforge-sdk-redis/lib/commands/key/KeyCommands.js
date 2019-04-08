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

    del: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.DEL(
                    command.param,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    expire: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.EXPIRE(
                    command.param.key,
                    command.param.seconds,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    persist: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.PERSIST(
                    command.param,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    type: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.TYPE(
                    command.param,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    },

    rename: function (command, callback) {
        connectionManager.connect(command.clusterSpec, command.destination, (error, redisClient) => {
            error ? callback({error: error, result: undefined}) :
                redisClient.RENAME(
                    command.param.key,
                    command.param.name,
                    (error, response) => {
                        callback({error: error, result: response}, redisClient);
                    }
                );
        });
    }

};