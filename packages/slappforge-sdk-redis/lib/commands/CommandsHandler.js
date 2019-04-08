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

module.exports = {

    execute: function (command, callback) {

        let type, operation, clusterSpec, params;
        let errCount = 0, client, counter;
        let responseArray = [];

        try {
            type = command.type;
            operation = command.operation;
            clusterSpec = command.clusterSpec;
            params = command.params;
            counter = params.length;
        } catch (error) {
            errCount++;
            callback(error);
        }

        if (errCount === 0) {
            async.forEach(params, (param, callback) => {
                type[operation](
                    {
                        clusterSpec: clusterSpec,
                        param: param,
                        destination: undefined,
                    },
                    (response, redisClient) => {
                        if (response.error) {
                            connectionManager.validateResponse(response.error.message, (destination) => {
                                responseArray[param.key || param] = response;
                                if (destination) {
                                    redisClient.quit();
                                    type[operation](
                                        {
                                            clusterSpec: clusterSpec,
                                            param: param,
                                            destination: destination
                                        },
                                        (response, redisClient) => {
                                            counter--;
                                            if (response.error)
                                                errCount++;
                                            responseArray[param.key || param] = response;
                                            redisClient && counter === 0 ? client = redisClient : redisClient.quit();
                                            return callback();

                                        });
                                } else {
                                    counter--;
                                    errCount++;
                                    responseArray[param.key || param] = response;
                                    redisClient && counter === 0 ? client = redisClient : redisClient.quit();
                                    return callback();
                                }
                            });
                        } else {
                            counter--;
                            responseArray[param.key || param] = response;
                            redisClient && counter === 0 ? client = redisClient : redisClient.quit();
                            return callback();
                        }
                    });
            }, () => {
                let tmpObj = {};
                params.forEach((param) => {
                    tmpObj[param.key || param] = responseArray[param.key || param];
                });
                callback(
                    undefined,
                    {
                        results: tmpObj,
                        success: params.length - errCount,
                        failed: errCount
                    }, client);
            });
        }
    }

};