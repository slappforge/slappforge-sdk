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
     */
    this.append = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisStrings.append(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Decrement the integer value of a key by the given number.
     */
    this.decrby = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisStrings.decrby(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Increment the integer value of a key by the given amount.
     */
    this.incrby = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisStrings.incrby(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Get a key/multiple keys.
     */
    this.get = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisStrings.get(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Set the string value of a key.
     */
    this.set = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisStrings.set(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Set the value and expiration of a key/multiple keys.
     */
    this.setex = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisStrings.setex(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Get the length of the value stored in a key.
     */
    this.strlen = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisStrings.strlen(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Delete a key/multiple keys.
     */
    this.del = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisKeys.del(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Set a key's time to live in seconds.
     */
    this.expire = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisKeys.expire(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Remove the expiration from a key.
     */
    this.persist = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisKeys.persist(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Determine the type stored at key.
     */
    this.type = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisKeys.type(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Rename a key.
     */
    this.rename = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisKeys.rename(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Append one or multiple members to a set.
     */
    this.sadd = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisSets.sadd(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Get the number of members in a set.
     */
    this.scard = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisSets.scard(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Subtract multiple sets.
     */
    this.sdiff = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisSets.sdiff(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Subtract multiple sets and store the resulting set in a key.
     */
    this.sdiffstore = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisSets.sdiffstore(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Intersect multiple sets.
     */
    this.sinter = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisSets.sinter(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Intersect multiple sets and store the resulting set in a key.
     */
    this.sinterstore = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisSets.sinterstore(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Determine if a given value is a member of a set.
     */
    this.sismember = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisSets.sismember(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Get all the members in a set.
     */
    this.smembers = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisSets.smembers(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Remove one or more members from a set.
     */
    this.srem = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisSets.srem(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Add multiple sets.
     */
    this.sunion = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisSets.sunion(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Add multiple sets and store the resulting set in a key.
     */
    this.sunionstore = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisSets.sunionstore(clusterSpec, params.params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
};