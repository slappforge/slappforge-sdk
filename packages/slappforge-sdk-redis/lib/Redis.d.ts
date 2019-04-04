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

    append(prams: APPENDParams, callback: Function);

    del(prams: DELParams, callback: Function);

    get(prams: GETParams, callback: Function);

    set(prams: SETParams, callback: Function);

    setex(prams: SETEXParams, callback: Function);

}

interface keyValuePair{
    key: string,
    value: string
}

interface setex extends keyValuePair{
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
    keyValuePairs: Array<keyValuePair>;
}

interface DELParams extends RedisParams {
    keys: Array<string>;
}

interface GETParams extends RedisParams {
    keys: Array<string>;
}

interface SETParams extends RedisParams {
    keyValuePairs: Array<keyValuePair>;
}

interface SETEXParams extends RedisParams {
    keyValuePairs: Array<setex>;
}



