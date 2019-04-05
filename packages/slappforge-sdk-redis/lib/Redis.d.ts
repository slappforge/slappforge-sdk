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

    /**keys**/
    del(prams: DELParams, callback: Function);

    expire(prams: EXPIREParams, callback: Function);

    persist(prams: PERSISTParams, callback: Function);

    type(prams: TYPEParams, callback: Function);

    rename(prams: RENAMEParams, callback: Function);

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
    keyValuePairs: Array<KeyValuePair>;
}

interface DECRBYParams extends RedisParams {
    keyDecrPairs: Array<KeyDecrPair>;
}

interface INCRBYParams extends RedisParams {
    keyIncrPairs: Array<KeyIncrPair>;
}

interface GETParams extends RedisParams {
    keys: Array<string>;
}

interface SETParams extends RedisParams {
    keyValuePairs: Array<KeyValuePair>;
}

interface SETEXParams extends RedisParams {
    keyValuePairs: Array<KeyTimePair>;
}

interface STRLENParams extends RedisParams {
    keys: Array<string>;
}

interface DELParams extends RedisParams {
    keys: Array<KeyTimePair>;
}

interface EXPIREParams extends RedisParams {
    keyTimePairs: Array<string>;
}

interface PERSISTParams extends RedisParams {
    keys: Array<string>;
}

interface TYPEParams extends RedisParams {
    keys: Array<string>;
}

interface RENAMEParams extends RedisParams {
    keyNamePairs: Array<KeyNamePair>;
}



