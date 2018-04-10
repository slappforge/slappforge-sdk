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

let xpath = require('xpath');
const XMLParser = require('./XMLParser');
let xmlParser = new XMLParser();

/**
 * @author Udith Gunaratna
 */
module.exports = function () {

    /**
     * Evaluates the given XPath expression on the given XML string
     *
     * @param xmlString     String containing the XML
     * @param xpathString   XPath expression to be evaluated
     * @param namespaces    XML namespace prefixes and urls as key-values
     * @return {Array<Node | Attr | string | number | boolean>}
     */
    this.evaluateXPath = function (xmlString, xpathString, namespaces = null) {
        let parsedDom = xmlParser.parseDOMFromString(xmlString);
        return this.evaluateXPath(parsedDom, xpathString, namespaces);
    };

    /**
     * Evaluates the given XPath expression on the given XML document
     *
     * @param document      XML document
     * @param xpathString   XPath expression to be evaluated
     * @param namespaces    XML namespace prefixes and urls as key-values
     * @return {Array<Node | Attr | string | number | boolean>}
     */
    this.evaluateXPath = function (document, xpathString, namespaces = null) {
        if (namespaces) {
            let select = xpath.useNamespaces(namespaces);
            return select(xpathString, document);
        } else {
            return xpath.select(xpathString, document);
        }
    };
};