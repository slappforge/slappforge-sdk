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
 * @author Udith Gunaratna
 */
module.exports = function (AWS) {
    let sqs = new AWS.SQS();

    this.addPermission = sqs.addPermission.bind(sqs);

    this.changeMessageVisibility = sqs.changeMessageVisibility.bind(sqs);

    this.changeMessageVisibilityBatch = sqs.changeMessageVisibilityBatch.bind(sqs);

    this.createQueue = sqs.createQueue.bind(sqs);

    this.deleteMessage = sqs.deleteMessage.bind(sqs);

    this.deleteMessageBatch = sqs.deleteMessageBatch.bind(sqs);

    this.deleteQueue = sqs.deleteQueue.bind(sqs);

    this.getQueueAttributes = sqs.getQueueAttributes.bind(sqs);

    this.getQueueUrl = sqs.getQueueUrl.bind(sqs);

    this.listDeadLetterSourceQueues = sqs.listDeadLetterSourceQueues.bind(sqs);

    this.listQueues = sqs.listQueues.bind(sqs);

    this.listQueueTags = sqs.listQueueTags.bind(sqs);

    this.purgeQueue = sqs.purgeQueue.bind(sqs);

    this.receiveMessage = sqs.receiveMessage.bind(sqs);

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

    this.removePermission = sqs.removePermission.bind(sqs);

    this.sendMessage = sqs.sendMessage.bind(sqs);

    this.sendMessageBatch = sqs.sendMessageBatch.bind(sqs);

    this.setQueueAttributes = sqs.setQueueAttributes.bind(sqs);

    this.tagQueue = sqs.tagQueue.bind(sqs);

    this.untagQueue = sqs.untagQueue.bind(sqs);
};