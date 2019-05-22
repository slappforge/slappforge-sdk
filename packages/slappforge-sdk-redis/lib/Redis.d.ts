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
export class Redis {
    constructor(clusterManager: ClusterManager);

    //string
    append(params: APPENDParams, callback: Function);

    incrby(params: INCRBYParams, callback: Function);

    decrby(params: DECRBYParams, callback: Function);

    get(params: GETParams, callback: Function);

    set(params: SETParams, callback: Function);

    setex(params: SETEXParams, callback: Function);

    strlen(params: STRLENParams, callback: Function);

    //type
    del(params: DELParams, callback: Function);

    expire(params: EXPIREParams, callback: Function);

    persist(params: PERSISTParams, callback: Function);

    type(params: TYPEParams, callback: Function);

    rename(params: RENAMEParams, callback: Function);

    //sets
    sadd(params: SADDParams, callback: Function);

    scard(params: SCARDParams, callback: Function);

    sdiff(params: SDIFFParams, callback: Function);

    sdiffstore(params: SDIFFSTOREParams, callback: Function);

    sinter(params: SINTERParams, callback: Function);

    sinterstore(params: SINTERSTOREParams, callback: Function);

    sismember(params: SISMEMBERParams, callback: Function);

    smembers(params: SMEMBERSParams, callback: Function);

    smove(params: SMOVEParams, callback: Function);

    srem(params: SREMParams, callback: Function);

    sunion(params: SUNIONParams, callback: Function);

    sunionstore(params: SUNIONSTOREParams, callback: Function);
}

interface Key {
    key: string,
}

interface KeyDecrPair extends Key {
    decrement: number
}

interface KeyIncrPair extends Key {
    increment: number
}

interface KeyNamePair extends Key {
    name: string
}

interface KeyValuePair extends Key {
    value: string
}

interface KeyValuesArray extends Key {
    values: Array<any>;
}

interface KeyTimePair extends Key {
    seconds: number
}

interface KeyValueTimePair extends KeyValuePair {
    seconds: number
}

interface KeyDesPair extends KeyValuePair {
    destination: number
}

interface ClusterManager {
    clusters: Array<object>;
}

interface RedisParams {
    redisClient: object;
    clusterIdentifier: string;
    clusterModeEnabled: boolean;
}

interface APPENDParams extends RedisParams {
    params: Array<KeyValuePair>;
}

interface DECRBYParams extends RedisParams {
    params: Array<KeyDecrPair>;
}

interface INCRBYParams extends RedisParams {
    params: Array<KeyIncrPair>;
}

interface GETParams extends RedisParams {
    params: Array<string>;
}

interface SETParams extends RedisParams {
    params: Array<KeyValuePair>;
}

interface SETEXParams extends RedisParams {
    params: Array<KeyValueTimePair>;
}

interface STRLENParams extends RedisParams {
    params: Array<string>;
}

interface DELParams extends RedisParams {
    params: Array<string>;
}

interface EXPIREParams extends RedisParams {
    params: Array<KeyTimePair>;
}

interface PERSISTParams extends RedisParams {
    params: Array<string>;
}

interface TYPEParams extends RedisParams {
    params: Array<string>;
}

interface RENAMEParams extends RedisParams {
    params: Array<KeyNamePair>;
}

interface SADDParams extends RedisParams {
    params: Array<KeyValuesArray>;
}

interface SCARDParams extends RedisParams {
    params: Array<string>;
}

interface SDIFFParams extends RedisParams {
    params: Array<KeyValuesArray>;
}

interface SDIFFSTOREParams extends RedisParams {
    params: Array<KeyValuesArray>;
}

interface SINTERParams extends RedisParams {
    params: Array<KeyValuesArray>;
}

interface SINTERSTOREParams extends RedisParams {
    params: Array<KeyValuesArray>;
}

interface SISMEMBERParams extends RedisParams {
    params: Array<KeyValuesArray>;
}

interface SMEMBERSParams extends RedisParams {
    params: Array<string>;
}

interface SMOVEParams extends RedisParams {
    params: Array<KeyDesPair>;
}

interface SREMParams extends RedisParams {
    params: Array<KeyValuesArray>;
}

interface SUNIONParams extends RedisParams {
    params: Array<KeyValuesArray>;
}

interface SUNIONSTOREParams extends RedisParams {
    params: Array<KeyValuesArray>;
}



