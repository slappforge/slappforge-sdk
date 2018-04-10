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

let xmlDOM = require('xmldom');

/**
 * @author Udith Gunaratna
 */
module.exports = function () {

    /**
     * Returns a new DOM Parser instance
     */
    this.getDOMParser = function () {
        return new xmlDOM.DOMParser();
    };

    /**
     * Parses the given XML string to the corresponding Document using a new DOM parser
     *
     * @param xmlString     the XML string to be parsed
     * @param mimeType      MIME type of the given xml (default is 'text/xml')
     * @return {Document} corresponding to the given XML string
     */
    this.parseDOMFromString = function (xmlString, mimeType = 'text/xml') {
        return this.parseDOMFromString(this.getDOMParser(), xmlString, mimeType);
    };

    /**
     * Parses the given XML string to the corresponding Document using the given DOM parser
     *
     * @param domParser     DOM parser instance to be used for parsing
     * @param xmlString     the XML string to be parsed
     * @param mimeType      MIME type of the given xml (default is 'text/xml')
     * @return {Document} corresponding to the given XML string
     */
    this.parseDOMFromString = function (domParser, xmlString, mimeType = 'text/xml') {
        if (domParser) {
            return this.getDOMParser().parseFromString(xmlString, mimeType);
        } else {
            this.parseDOMFromString(xmlString, mimeType)
        }
    };
};