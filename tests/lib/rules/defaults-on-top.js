/**
 * @fileoverview Require defaults to be on top of the model
 * @author Ilya Volodin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var RuleTester = require("eslint").RuleTester;
var rule = require("../../../lib/rules/defaults-on-top");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();
eslintTester.run("defaults-on-top", rule, {

    valid: [
        "Backbone.Model.extend({ defaults: {}, initialize: function() {} });",
        "Backbone.Model.extend({ });",
        "Backbone.Model.extend({ initialize: function() {} });",
        "Backbone.Model.extend({ initialize: function() { var defaults = {}; } });"
    ],

    invalid: [
        {
            code: "Backbone.Model.extend({ initialize: function() {}, defaults: {} });",
            errors: [ { message: "defaults should be declared at the top of the model." } ]
        }
    ]
});
