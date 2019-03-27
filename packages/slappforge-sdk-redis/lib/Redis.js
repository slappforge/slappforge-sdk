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

let stringCommands = require('./commands/StringCommandsHandler');
let redisStrings = new stringCommands();


/**
 *
 * https://redis.io/commands
 * http://redis.js.org/#redis-a-nodejs-redis-client-usage-example-sending-commands
 * @author Lahiru Ananda
 */
module.exports = function (clusterManager) {

    this.clusters = new clusterManager().clusters;

    /**
     * SET/MSET
     * Sets the given key to their respective value.
     */
    this.set = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];

        redisStrings.set(clusterSpec, params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * GET/MGET
     * returns array of corresponding values. If the key does not exist null is returned.
     * An error is returned if the value stored at key is not a string
     */
    this.get = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];

        redisStrings.get(clusterSpec, params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * DEL
     * Returns the number of keys that were removed
     * Removes the specified key/keys. A key is ignored if it does not exist
     */
    this.del = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];

        redisStrings.del(clusterSpec, params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

};