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
 * @author Chathura Widanage
 */
module.exports = function (AWS) {
    let sqs = new AWS.SQS();

    this.addPermission = sqs.addPermission;

    this.changeMessageVisibility = sqs.changeMessageVisibility;

    this.changeMessageVisibilityBatch = sqs.changeMessageVisibilityBatch;

    this.createQueue = sqs.createQueue;

    this.deleteMessage = sqs.deleteMessage;

    this.deleteMessageBatch = sqs.deleteMessageBatch;

    this.deleteQueue = sqs.deleteQueue;

    this.getQueueAttributes = sqs.getQueueAttributes;

    this.getQueueUrl = sqs.getQueueUrl;

    this.listDeadLetterSourceQueues = sqs.listDeadLetterSourceQueues;

    this.listQueues = sqs.listQueues;

    this.listQueueTags = sqs.listQueueTags;

    this.purgeQueue = sqs.purgeQueue;

    this.receiveMessage = sqs.receiveMessage;

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

    this.removePermission = sqs.removePermission;

    this.sendMessage = sqs.sendMessage;

    this.sendMessageBatch = sqs.sendMessageBatch;

    this.setQueueAttributes = sqs.setQueueAttributes;

    this.tagQueue = sqs.tagQueue;

    this.untagQueue = sqs.untagQueue;
};