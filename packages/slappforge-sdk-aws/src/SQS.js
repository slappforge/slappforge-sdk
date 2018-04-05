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
 * @author Manjula Piyumal
 */
module.exports = function (AWS) {
    let sqs = new AWS.SQS();
    this.addPermission = function (params, successCallback, errorCallback) {
        sqs.addPermission(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.changeMessageVisibility = function (params, successCallback, errorCallback) {
        sqs.changeMessageVisibility(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.changeMessageVisibilityBatch = function (params, successCallback, errorCallback) {
        sqs.changeMessageVisibilityBatch(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.createQueue = function (params, successCallback, errorCallback) {
        sqs.createQueue(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.deleteMessage = function (params, successCallback, errorCallback) {
        sqs.deleteMessage(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.deleteMessageBatch = function (params, successCallback, errorCallback) {
        sqs.deleteMessageBatch(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.deleteQueue = function (params, successCallback, errorCallback) {
        sqs.deleteQueue(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.getQueueAttributes = function (params, successCallback, errorCallback) {
        sqs.getQueueAttributes(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.getQueueUrl = function (params, successCallback, errorCallback) {
        sqs.getQueueUrl(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.listDeadLetterSourceQueues = function (params, successCallback, errorCallback) {
        sqs.listDeadLetterSourceQueues(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.listQueues = function (params, successCallback, errorCallback) {
        sqs.listQueues(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.listQueueTags = function (params, successCallback, errorCallback) {
        sqs.listQueueTags(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.purgeQueue = function (params, successCallback, errorCallback) {
        sqs.purgeQueue(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.receiveMessage = function (params, successCallback, errorCallback) {
        sqs.receiveMessage(params)
            .promise()
            .then(function (receivedMsgData) {
                successCallback(receivedMsgData !== null ? receivedMsgData.Messages : null);
            })
            .catch(function (error) {
                errorCallback(error);
            });
    };

    // noinspection JSUnusedGlobalSymbols
    this.receiveAndDeleteMessages = function (params, filteringCallBack, deleteCallBack, errorCallBack) {
        sqs.receiveMessage(params)
            .promise()
            .then(function (receivedMsgData) {
                let filteredMessages = filteringCallBack(receivedMsgData !== null ? receivedMsgData.Messages : null);
                filteredMessages.forEach(function (message) {
                    sqs.deleteMessage({
                        QueueUrl: params["QueueUrl"],
                        ReceiptHandle: message.ReceiptHandle
                    }).promise()
                        .then(function (deleteData) {
                            deleteCallBack(deleteData);
                        })
                        .catch(function (deleteError) {
                            errorCallBack(deleteError);
                        })
                })
            })
            .catch(function (err) {
                errorCallBack(err);
            });
    };

    this.removePermission = function (params, successCallback, errorCallback) {
        sqs.removePermission(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.sendMessage = function (params, successCallback, errorCallback) {
        sqs.sendMessage(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.sendMessageBatch = function (params, successCallback, errorCallback) {
        sqs.sendMessageBatch(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.setQueueAttributes = function (params, successCallback, errorCallback) {
        sqs.setQueueAttributes(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.tagQueue = function (params, successCallback, errorCallback) {
        sqs.tagQueue(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };

    this.untagQueue = function (params, successCallback, errorCallback) {
        sqs.untagQueue(params)
            .promise()
            .then(function (successData) {
                successCallback(successData);
            })
            .catch(function (error) {
                errorCallback(error);
            })
    };
};