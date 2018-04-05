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

let xmlJS = require('xml-js');
let xmlDOM = require('xmldom');
let xpath = require('xpath');

/**
 * @author Udith Gunaratna
 */
module.exports = function () {

    this.parseDOMFromString = function (xmlString, mimeType = 'text/xml') {
        return new xmlDOM.DOMParser().parseFromString(xmlString, mimeType);
    };

    this.serializeDOMToString = function(domNode) {
        return new xmlDOM.XMLSerializer().serializeToString(domNode);
    };
    
    this.convertToJsonStr = function (xmlString, compactOutput = true, options = {}) {
        options['compact'] = compactOutput;
        return xmlJS.xml2json(xmlString, options);
    };

    this.convertToJSObject = function (xmlString, compactOutput = true, options = {}) {
        options['compact'] = compactOutput;
        return xmlJS.xml2js(xmlString, options);
    };
    
    this.evaluateXPath = function (document, xpathStr, namespaces = null) {
        // If the provided document is an XML string, parse it to a DOM element
        let parsedDoc = (typeof document === 'string' || document instanceof String) ?
            this.parseDOMFromString(document) : document;

        if (namespaces) {
            let select = xpath.useNamespaces(namespaces);
            return select(xpathStr, parsedDoc);
        } else {
            return xpath.select(xpathStr, parsedDoc);
        }
    }
};