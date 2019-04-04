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

let redis = require('redis');
const validatorRegex = "^(MOVED)\\ [0-9]*\\ [0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}:[0-9]{1,5}$";

module.exports = {

    connect: function (clusterSpec, redirect, callback) {
        let tmpObj = clusterSpec;
        if (redirect) {
            tmpObj.host = redirect.host;
            tmpObj.port = redirect.port;
        }
        let redisClient = redis.createClient(tmpObj);
        redisClient.on('ready', () => {
            callback(undefined, redisClient);
        });
    },

    validateResponse: function (errorMsg, callback) {
        let regex = new RegExp(validatorRegex);
        if (regex.test(errorMsg)) {
            let destination = errorMsg.split(" ")[2];
            callback({
                host: destination.split(":")[0],
                port: parseInt(destination.split(":")[1])
            });
        } else {
            callback(null);
        }
    },

};