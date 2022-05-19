$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("searchfunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click used  link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \"Used Cars For Sale\" used cars for sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model  \"\u003cmodel\u003e\" from used cars",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 38,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Honda",
        "City",
        "NSW - All",
        "$50,000"
      ],
      "line": 39,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Jeep",
        "Wrangler",
        "NSW - All",
        "$60,000"
      ],
      "line": 40,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Kia",
        "Niro",
        "QLD - All",
        "$40,000"
      ],
      "line": 41,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Volkswagen",
        "Golf",
        "NSW - Sydney",
        "$45,000"
      ],
      "line": 42,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Suzuki",
        "Vitara",
        "NT - South",
        "$45,000"
      ],
      "line": 43,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14152584301,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click used  link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \"Used Cars For Sale\" used cars for sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model  \"City\" from used cars",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 325636000,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2223043600,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickUsedLink()"
});
formatter.result({
  "duration": 1682122899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iNavigateToUsedCarsForSalePage(String)"
});
formatter.result({
  "duration": 118787201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iSelectMake(String)"
});
formatter.result({
  "duration": 317500100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 17
    }
  ],
  "location": "SelectCarTest.iSelectModelFromUsedCars(String)"
});
formatter.result({
  "duration": 373229101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SelectCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 264532499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 243724599,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2802346699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "SelectCarTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 108200200,
  "status": "passed"
});
formatter.after({
  "duration": 1563425900,
  "status": "passed"
});
formatter.before({
  "duration": 8974073900,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click used  link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \"Used Cars For Sale\" used cars for sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model  \"Wrangler\" from used cars",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 36101,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2161317400,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickUsedLink()"
});
formatter.result({
  "duration": 1985593500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iNavigateToUsedCarsForSalePage(String)"
});
formatter.result({
  "duration": 66260700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iSelectMake(String)"
});
formatter.result({
  "duration": 323697499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrangler",
      "offset": 17
    }
  ],
  "location": "SelectCarTest.iSelectModelFromUsedCars(String)"
});
formatter.result({
  "duration": 293519701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SelectCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 241919299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 250867800,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4204631700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "SelectCarTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 72604201,
  "status": "passed"
});
formatter.after({
  "duration": 1650268900,
  "status": "passed"
});
formatter.before({
  "duration": 10053207501,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click used  link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \"Used Cars For Sale\" used cars for sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model  \"Niro\" from used cars",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 27700,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2152677600,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickUsedLink()"
});
formatter.result({
  "duration": 1547443500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iNavigateToUsedCarsForSalePage(String)"
});
formatter.result({
  "duration": 70240401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iSelectMake(String)"
});
formatter.result({
  "duration": 330074599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Niro",
      "offset": 17
    }
  ],
  "location": "SelectCarTest.iSelectModelFromUsedCars(String)"
});
formatter.result({
  "duration": 338505401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "SelectCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 248838600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 241343000,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1814427500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "SelectCarTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 40080577299,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //h1[@class\u003d\u0027listing-search-title\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027KEYOU\u0027, ip: \u0027192.168.1.213\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [27949f7d-b281-4af7-9a06-23fb73dcc968, findElement {using\u003dxpath, value\u003d//h1[@class\u003d\u0027listing-search-title\u0027]}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 100.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220513165813, moz:debuggerAddress: localhost:49638, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 16348, moz:profile: C:\\Users\\mihir\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), se:cdp: ws://localhost:49638/devtoo..., se:cdpVersion: 85, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 27949f7d-b281-4af7-9a06-23fb73dcc968\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat au.com.carsguide.utility.Utility.getTextFromElement(Utility.java:63)\r\n\tat au.com.carsguide.pages.ResultPage.verifyUsedCarMake(ResultPage.java:26)\r\n\tat au.com.carsguide.steps.SelectCarTest.iShouldSeeTheMakeInResults(SelectCarTest.java:69)\r\n\tat ✽.Then I should see the make \"Kia\" in results(searchfunctionality.feature:35)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1339141300,
  "status": "passed"
});
formatter.before({
  "duration": 9114124500,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click used  link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \"Used Cars For Sale\" used cars for sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Volkswagen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model  \"Golf\" from used cars",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$45,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Volkswagen\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 43100,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2150033400,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickUsedLink()"
});
formatter.result({
  "duration": 2072300699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iNavigateToUsedCarsForSalePage(String)"
});
formatter.result({
  "duration": 79920999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iSelectMake(String)"
});
formatter.result({
  "duration": 325699201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Golf",
      "offset": 17
    }
  ],
  "location": "SelectCarTest.iSelectModelFromUsedCars(String)"
});
formatter.result({
  "duration": 287364701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "SelectCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 252772201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 237370399,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4398059200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 23
    }
  ],
  "location": "SelectCarTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 66585300,
  "status": "passed"
});
formatter.after({
  "duration": 1505148800,
  "status": "passed"
});
formatter.before({
  "duration": 10425263200,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click used  link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \"Used Cars For Sale\" used cars for sale page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Suzuki\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model  \"Vitara\" from used cars",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NT - South\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$45,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Suzuki\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 43701,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2148991400,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickUsedLink()"
});
formatter.result({
  "duration": 1759122399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iNavigateToUsedCarsForSalePage(String)"
});
formatter.result({
  "duration": 90537600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suzuki",
      "offset": 15
    }
  ],
  "location": "SelectCarTest.iSelectMake(String)"
});
formatter.result({
  "duration": 326730700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vitara",
      "offset": 17
    }
  ],
  "location": "SelectCarTest.iSelectModelFromUsedCars(String)"
});
formatter.result({
  "duration": 394315300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - South",
      "offset": 19
    }
  ],
  "location": "SelectCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 297651500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 16
    }
  ],
  "location": "SelectCarTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 248820500,
  "status": "passed"
});
formatter.match({
  "location": "SelectCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2255177301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suzuki",
      "offset": 23
    }
  ],
  "location": "SelectCarTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 40083279499,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //h1[@class\u003d\u0027listing-search-title\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027KEYOU\u0027, ip: \u0027192.168.1.213\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [1a6d00e7-d19a-449e-9474-dbc829839628, findElement {using\u003dxpath, value\u003d//h1[@class\u003d\u0027listing-search-title\u0027]}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 100.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220513165813, moz:debuggerAddress: localhost:54025, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 6300, moz:profile: C:\\Users\\mihir\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), se:cdp: ws://localhost:54025/devtoo..., se:cdpVersion: 85, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1a6d00e7-d19a-449e-9474-dbc829839628\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat au.com.carsguide.utility.Utility.getTextFromElement(Utility.java:63)\r\n\tat au.com.carsguide.pages.ResultPage.verifyUsedCarMake(ResultPage.java:26)\r\n\tat au.com.carsguide.steps.SelectCarTest.iShouldSeeTheMakeInResults(SelectCarTest.java:69)\r\n\tat ✽.Then I should see the make \"Suzuki\" in results(searchfunctionality.feature:35)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1514984200,
  "status": "passed"
});
});