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

let async = require('async');
let connectionManager = require('../ConnectionManager');

module.exports = function () {

    this.execute = function (command, callback) {
        let params, client, counter, errCount = 0;
        let responseArray = [];
        try {
            params = command.params;
            counter = params.length;
            async.forEach(params, (param, callback) => {
                handle(
                    command.type,
                    command.operation,
                    command.clusterSpec,
                    param,
                    (response, redisClient) => {
                        counter--;
                        if (response.error)
                            errCount++;
                        redisClient && counter === 0 ? client = redisClient : redisClient.quit();
                        responseArray[param.key || param] = response;
                        return callback();
                    });
            }, () => {
                callback(
                    undefined,
                    {
                        results: responseArray,
                        success: params.length - errCount,
                        failed: errCount
                    }, client);
            });
        } catch (error) {
            callback(error);
        }
    };

    this.setExecute = function (command, callback) {
        let client, errCount = 0, inputCount = 0;
        let responseArray = [];
        try {
            let outerCounter = command.params.length;
            async.forEach(command.params, (param, callback) => {
                let innerCounter = param.values.length, resObj = {};
                inputCount += param.values.length;
                async.forEach(param.values,
                    (value, callback) => {
                        handle(
                            command.type,
                            command.operation,
                            command.clusterSpec,
                            {
                                key: param.key,
                                value: value
                            },
                            (response, redisClient) => {
                                if(--innerCounter === 0)
                                    outerCounter--;
                                if (response.error)
                                    errCount++;
                                redisClient && outerCounter === 0
                                    ? client = redisClient
                                    : redisClient.quit();
                                resObj[value] = response;
                                return callback();
                            });
                    },
                    () => {
                        responseArray[param.key] = resObj;
                        return callback();
                    }
                );
            }, () => {
                callback(
                    undefined,
                    {
                        results: responseArray,
                        success: inputCount - errCount,
                        failed: errCount
                    }, client);
            });
        } catch (error) {
            callback(error);
        }
    };

    const handle = function (type, operation, clusterSpec, param, callback) {
        type[operation](
            {
                clusterSpec: clusterSpec,
                param: param,
                destination: undefined,
            },
            (response, redisClient) => {
                if (response.error) {
                    connectionManager.validateResponse(response.error.message, (destination) => {
                        if (destination) {
                            redisClient.quit();
                            type[operation](
                                {
                                    clusterSpec: clusterSpec,
                                    param: param,
                                    destination: destination
                                },
                                (response, redisClient) => {
                                    callback(response, redisClient);

                                });
                        } else {
                            callback(response, redisClient);
                        }
                    });
                } else {
                    callback(response, redisClient);
                }
            });
    }
};