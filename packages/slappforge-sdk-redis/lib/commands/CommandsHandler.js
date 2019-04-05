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

        const type = command.type;
        const operation = command.operation;
        const clusterSpec = command.clusterSpec;
        const inputs = command.inputs;

        let counter = inputs.length;
        let errCount = 0;
        let responseArray = [], client;

        async.forEach(inputs, (input, callback) => {
            type[operation](
                {
                    clusterSpec: clusterSpec,
                    input: input,
                    destination: undefined,
                },
                (response, redisClient) => {
                    responseArray[input.key || input] = response;
                    if (response.error) {
                        connectionManager.validateResponse(response.error.message, (destination) => {
                            responseArray[input.key || input] = response;
                            if (destination) {
                                redisClient.quit();
                                type[operation](
                                    {
                                        clusterSpec: clusterSpec,
                                        input: input,
                                        destination: destination
                                    },
                                    (response, redisClient) => {
                                        counter--;
                                        if (response.error)
                                            errCount++;
                                        redisClient && counter === 0 ? client = redisClient : redisClient.quit();
                                        return callback();

                                    });
                            } else {
                                counter--;
                                errCount++;
                                redisClient && counter === 0 ? client = redisClient : redisClient.quit();
                                return callback();
                            }
                        });
                    } else {
                        counter--;
                        redisClient && counter === 0 ? client = redisClient : redisClient.quit();
                        return callback();
                    }
                });
        }, (error) => {
            callback(
                error,
                {
                    results: inputs.map((value) => {
                        return responseArray[value.key || value];
                    }),
                    success: inputs.length - errCount,
                    failed: errCount
                }, client);
        });
    }

};