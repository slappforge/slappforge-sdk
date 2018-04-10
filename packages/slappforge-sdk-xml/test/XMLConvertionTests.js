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

const XMLConverter = require("../lib/XMLConverter");
let xmlConverter = new XMLConverter();

/**
 * @author Udith Gunaratna
 */
exports.xmlToJsonNonCompactConversions = {

    'Single Element': function (test) {
        testXMLToJsonConversion(test, '<a/>', '{"elements":[{"type":"element","name":"a"}]}', false);
    },

    'Multiple Elements': function (test) {
        testXMLToJsonConversion(test, '<a/><b/>',
            '{"elements":[{"type":"element","name":"a"},{"type":"element","name":"b"}]}', false);
    },

    'Nested Elements': function (test) {
        testXMLToJsonConversion(test, '<a><b/></a>',
            '{"elements":[{"type":"element","name":"a","elements":[{"type":"element","name":"b"}]}]}', false);
    },

    'Element Text': function (test) {
        testXMLToJsonConversion(test, '<a>Hi</a>',
            '{"elements":[{"type":"element","name":"a","elements":[{"type":"text","text":"Hi"}]}]}', false);
    },

    'Element Attributes': function (test) {
        // noinspection HtmlUnknownAttribute
        testXMLToJsonConversion(test, '<a x="1.234" y="It\'s"/>',
            '{"elements":[{"type":"element","name":"a","attributes":{"x":"1.234","y":"It\'s"}}]}', false);
    },

    'Declaration': function (test) {
        testXMLToJsonConversion(test, '<?xml?>', '{"declaration":{}}', false);
    },

    'Declaration with Attributes': function (test) {
        testXMLToJsonConversion(test, '<?xml version="1.0" encoding="utf-8"?>',
            '{"declaration":{"attributes":{"version":"1.0","encoding":"utf-8"}}}', false);
    },

    'Instruction': function (test) {
        testXMLToJsonConversion(test, '<?go there?>',
            '{"elements":[{"type":"instruction","name":"go","instruction":"there"}]}', false);
    },

    'Comment': function (test) {
        testXMLToJsonConversion(test, '<!--Hello, World!-->',
            '{"elements":[{"type":"comment","comment":"Hello, World!"}]}', false);
    },

    'CData': function (test) {
        testXMLToJsonConversion(test, '<![CDATA[<foo></bar>]]>',
            '{"elements":[{"type":"cdata","cdata":"<foo></bar>"}]}', false);
    }
};

exports.xmlToJsonCompactConversions = {

    'Single Element': function (test) {
        testXMLToJsonConversion(test, '<a/>', '{"a":{}}', true);
    },

    'Multiple Elements': function (test) {
        testXMLToJsonConversion(test, '<a/><b/>', '{"a":{},"b":{}}', true);
    },

    'Nested Elements': function (test) {
        testXMLToJsonConversion(test, '<a><b/></a>', '{"a":{"b":{}}}', true);
    },

    'Element Text': function (test) {
        testXMLToJsonConversion(test, '<a>Hi</a>', '{"a":{"_text":"Hi"}}', true);
    },

    'Element Attributes': function (test) {
        // noinspection HtmlUnknownAttribute
        testXMLToJsonConversion(test, '<a x="1.234" y="It\'s"/>', '{"a":{"_attributes":{"x":"1.234","y":"It\'s"}}}', true);
    },

    'Declaration': function (test) {
        testXMLToJsonConversion(test, '<?xml?>', '{"_declaration":{}}', true);
    },

    'Declaration with Attributes': function (test) {
        testXMLToJsonConversion(test, '<?xml version="1.0" encoding="utf-8"?>',
            '{"_declaration":{"_attributes":{"version":"1.0","encoding":"utf-8"}}}', true);
    },

    'Instruction': function (test) {
        testXMLToJsonConversion(test, '<?go there?>', '{"_instruction":{"go":"there"}}', true);
    },

    'Comment': function (test) {
        testXMLToJsonConversion(test, '<!--Hello, World!-->', '{"_comment":"Hello, World!"}', true);
    },

    'CData': function (test) {
        testXMLToJsonConversion(test, '<![CDATA[<foo></bar>]]>', '{"_cdata":"<foo></bar>"}', true);
    }
};

exports.xmlToJSNonCompactConversions = {

    'Single Element': function (test) {
        testXMLToJSConversion(test, '<a/>', {"elements":[{"type":"element","name":"a"}]}, false);
    },

    'Multiple Elements': function (test) {
        testXMLToJSConversion(test, '<a/><b/>',
            {"elements":[{"type":"element","name":"a"},{"type":"element","name":"b"}]}, false);
    },

    'Nested Elements': function (test) {
        testXMLToJSConversion(test, '<a><b/></a>',
            {"elements":[{"type":"element","name":"a","elements":[{"type":"element","name":"b"}]}]}, false);
    },

    'Element Text': function (test) {
        testXMLToJSConversion(test, '<a>Hi</a>',
            {"elements":[{"type":"element","name":"a","elements":[{"type":"text","text":"Hi"}]}]}, false);
    },

    'Element Attributes': function (test) {
        // noinspection HtmlUnknownAttribute
        testXMLToJSConversion(test, '<a x="1.234" y="It\'s"/>',
            {"elements":[{"type":"element","name":"a","attributes":{"x":"1.234","y":"It\'s"}}]}, false);
    },

    'Declaration': function (test) {
        testXMLToJSConversion(test, '<?xml?>', {"declaration":{}}, false);
    },

    'Declaration with Attributes': function (test) {
        testXMLToJSConversion(test, '<?xml version="1.0" encoding="utf-8"?>',
            {"declaration":{"attributes":{"version":"1.0","encoding":"utf-8"}}}, false);
    },

    'Instruction': function (test) {
        testXMLToJSConversion(test, '<?go there?>',
            {"elements":[{"type":"instruction","name":"go","instruction":"there"}]}, false);
    },

    'Comment': function (test) {
        testXMLToJSConversion(test, '<!--Hello, World!-->',
            {"elements":[{"type":"comment","comment":"Hello, World!"}]}, false);
    },

    'CData': function (test) {
        testXMLToJSConversion(test, '<![CDATA[<foo></bar>]]>',
            {"elements":[{"type":"cdata","cdata":"<foo></bar>"}]}, false);
    }
};

exports.xmlToJSCompactConversions = {

    'Single Element': function (test) {
        testXMLToJSConversion(test, '<a/>', {"a":{}}, true);
    },

    'Multiple Elements': function (test) {
        testXMLToJSConversion(test, '<a/><b/>', {"a":{},"b":{}}, true);
    },

    'Nested Elements': function (test) {
        testXMLToJSConversion(test, '<a><b/></a>', {"a":{"b":{}}}, true);
    },

    'Element Text': function (test) {
        testXMLToJSConversion(test, '<a>Hi</a>', {"a":{"_text":"Hi"}}, true);
    },

    'Element Attributes': function (test) {
        // noinspection HtmlUnknownAttribute
        testXMLToJSConversion(test, '<a x="1.234" y="It\'s"/>', {"a":{"_attributes":{"x":"1.234","y":"It\'s"}}}, true);
    },

    'Declaration': function (test) {
        testXMLToJSConversion(test, '<?xml?>', {"_declaration":{}}, true);
    },

    'Declaration with Attributes': function (test) {
        testXMLToJSConversion(test, '<?xml version="1.0" encoding="utf-8"?>',
            {"_declaration":{"_attributes":{"version":"1.0","encoding":"utf-8"}}}, true);
    },

    'Instruction': function (test) {
        testXMLToJSConversion(test, '<?go there?>', {"_instruction":{"go":"there"}}, true);
    },

    'Comment': function (test) {
        testXMLToJSConversion(test, '<!--Hello, World!-->', {"_comment":"Hello, World!"}, true);
    },

    'CData': function (test) {
        testXMLToJSConversion(test, '<![CDATA[<foo></bar>]]>', {"_cdata":"<foo></bar>"}, true);
    }
};

function testXMLToJsonConversion(test, inputXML, expectedResult, isCompact) {
    let result = xmlConverter.convertToJsonStr(inputXML, isCompact);
    test.equal(result, expectedResult);
    test.done();
}

function testXMLToJSConversion(test, inputXML, expectedResult, isCompact) {
    let result = xmlConverter.convertToJSObject(inputXML, isCompact);
    test.equal(JSON.stringify(result), JSON.stringify(expectedResult));
    test.done();
}