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

let redisStrings = require('./commands/strings/StringCommandsHandler');
let redisKeys = require('./commands/keys/KeyCommandsHandler');
let redisSets = require('./commands/sets/SetCommandsHandler');

/**
 *
 * https://redis.io/commands
 * @author Lahiru Ananda
 */
module.exports = function (clusterManager) {

    this.clusters = new clusterManager().clusters;

    /**
     * Append a value to a key/multiple values to multiple keys.
     * Integer reply: the length of the string after the append operation.
     */
    this.append = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisStrings.append(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Decrement the integer value of a key by the given number.
     * Integer reply: the value of key after the decrement
     */
    this.decrby = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisStrings.decrby(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Increment the integer value of a key by the given amount.
     * Integer reply: the value of key after the increment
     */
    this.incrby = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisStrings.incrby(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Get a key/multiple keys.
     */
    this.get = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisStrings.get(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Set the string value of a key.
     * Bulk string reply: the value of key, or null when key does not exist.
     */
    this.set = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisStrings.set(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Set the value and expiration of a key/multiple keys.
     * Simple string reply: OK if SET was executed correctly.
     */
    this.setex = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisStrings.setex(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Get the length of the value stored in a key.
     * Bulk string reply: the value of key, or null when key does not exist.
     */
    this.strlen = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisStrings.strlen(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Delete a key/multiple keys.
     * Integer reply: The number of keys that were removed.
     */
    this.del = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisKeys.del(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Set a key's time to live in seconds.
     * Integer reply, specifically: 1 if the timeout was set, 0 if key does not exist
     */
    this.expire = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisKeys.expire(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Remove the expiration from a key.
     * Integer reply, specifically: 1 if the timeout was removed,
     * 0 if key does not exist or does not have an associated timeout.
     */
    this.persist = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisKeys.persist(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Determine the type stored at key.
     * Simple string reply: type of key, or none when key does not exist.
     */
    this.type = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisKeys.type(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Rename a key.
     * Simple string reply: OK
     */
    this.rename = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisKeys.rename(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Append one or multiple members to a set.
     * Integer reply: the number of elements that were added to the set,
     * not including all the elements already present into the set.
     */
    this.sadd = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisSets.sadd(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Get the number of members in a set.
     * Integer reply: the cardinality (number of elements) of the set, or 0 if key does not exist.
     */
    this.scard = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisSets.scard(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Subtract multiple sets.
     * Array reply: list with members of the resulting set.
     */
    this.sdiff = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisSets.sdiff(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Subtract multiple sets and store the resulting set in a key.
     * Integer reply: the number of elements in the resulting set.
     */
    this.sdiffstore = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisSets.sdiffstore(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Intersect multiple sets.
     * Array reply: list with members of the resulting set.
     */
    this.sinter = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisSets.sinter(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Intersect multiple sets and store the resulting set in a key.
     * Integer reply: the number of elements in the resulting set.
     */
    this.sinterstore = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisSets.sinterstore(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Determine if a given value is a member of a set.
     * Integer reply, specifically: 1 if the element is a member of the set,
     *  0 if the element is not a member of the set, or if key does not exist.
     */
    this.sismember = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisSets.sismember(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Get all the members in a set.
     * Array reply: all elements of the set.
     */
    this.smembers = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisSets.smembers(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Move a member from one set to another.
     * Integer reply, specifically: 1 if the element is moved,
     *  0 if the element is not a member of source and no operation was performed.
     */
    this.smove = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisSets.smove(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Remove one or more members from a set.
     * Integer reply: the number of members that were removed from the set,
     * not including non existing members.
     */
    this.srem = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisSets.srem(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Add multiple sets.
     * Array reply: list with members of the resulting set.
     */
    this.sunion = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisSets.sunion(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Add multiple sets and store the resulting set in a key.
     * Integer reply: the number of elements in the resulting set.
     */
    this.sunionstore = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        clusterSpec = {...clusterSpec, redisClient: params.redisClient};
        redisSets.sunionstore(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

};