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

    /**strings**/
    append(prams: APPENDParams, callback: Function);

    incrby(prams: INCRBYParams, callback: Function);

    decrby(prams: DECRBYParams, callback: Function);

    get(prams: GETParams, callback: Function);

    set(prams: SETParams, callback: Function);

    setex(prams: SETEXParams, callback: Function);

    strlen(prams: STRLENParams, callback: Function);

    /**typeParams**/
    del(prams: DELParams, callback: Function);

    expire(prams: EXPIREParams, callback: Function);

    persist(prams: PERSISTParams, callback: Function);

    type(prams: TYPEParams, callback: Function);

    rename(prams: RENAMEParams, callback: Function);

    /**sets**/
    sadd(prams: SADDParams, callback: Function);

    scard(prams: SCARDParams, callback: Function);

    sdiff(prams: SDIFFParams, callback: Function);

    sdiffstore(prams: SDIFFSTOREParams, callback: Function);

    sinter(prams: SINTERParams, callback: Function);

    sinterstore(prams: SINTERSTOREParams, callback: Function);

    sismember(prams: SISMEMBERParams, callback: Function);

    smembers(prams: SMEMBERSParams, callback: Function);

    srem(prams: SREMParams, callback: Function);

    sunion(prams: SUNIONParams, callback: Function);

    sunionstore(prams: SUNIONSTOREParams, callback: Function);
}

interface Key{
    key: string,
}

interface KeyDecrPair extends Key{
    decrement: number
}

interface KeyIncrPair extends Key{
    increment: number
}

interface KeyNamePair extends Key{
    name: string
}

interface KeyValuePair extends Key{
    value: string
}

interface KeyValuesArray extends Key{
    values: Array<any>;
}

interface KeyTimePair extends KeyValuePair{
    seconds: number
}

interface ClusterManager {
    clusters: Array<object>;
}

interface RedisParams {
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
    params: Array<KeyTimePair>;
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

interface SREMParams extends RedisParams {
    params: Array<KeyValuesArray>;
}

interface SUNIONParams extends RedisParams {
    params: Array<KeyValuesArray>;
}

interface SUNIONSTOREParams extends RedisParams {
    params: Array<KeyValuesArray>;
}



