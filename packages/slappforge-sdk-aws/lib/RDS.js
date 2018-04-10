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

let mysql = require('mysql');

/**
 * @author Randika Navagamuwa
 */
module.exports = function (connectionManager) {

    this.connections = new connectionManager();

    this.query = function (params, callback, connection) {
        let mysqlConnection = connection || mysql.createConnection(this.connections.dbConnections[params.instanceIdentifier]);
        let sqlQuery = params.query;
        let inserts = params.inserts || [];
        mysqlConnection.query(mysql.format(sqlQuery, inserts), function (error, results) {
            callback(error, results, mysqlConnection);
        });
    };

    this.beginTransaction = function (params, callback) {
        let mysqlConnection = mysql.createConnection(this.connections.dbConnections[params.instanceIdentifier]);
        mysqlConnection.beginTransaction(function (error) {
            callback(error, mysqlConnection)
        });
    };
};