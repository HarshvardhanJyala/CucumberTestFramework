$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("scenarioOne.feature");
formatter.feature({
  "name": "To run the login feataure",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "the website is running in chrome",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters the registered \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on sign in button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "password"
      ]
    },
    {
      "cells": [
        "teest",
        "abc"
      ]
    },
    {
      "cells": [
        "batman",
        "batman"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "the website is running in chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "TestCases.the_website_is_running_in_chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the registered \"teest\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestCases.user_enters_the_registered(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"abc\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestCases.user_enters_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCases.clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "the website is running in chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "TestCases.the_website_is_running_in_chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the registered \"batman\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestCases.user_enters_the_registered(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"batman\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestCases.user_enters_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCases.clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
});