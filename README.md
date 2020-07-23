# Cypress Example

[![Codeship Status for qualityshepherd/cypress-example](https://app.codeship.com/projects/b91bbd90-af26-0138-8898-22ba82a42bc3/status?branch=master)](https://app.codeship.com/projects/403818)


An example project using the automation tool, [Cypress](https://www.cypress.io/). These tests are quite silly but are intended to provide examples of common actions you may need in your testing. I've included:
- page objects
- api tests
- various ways of running the tests (via npm scripts)

Cypress is an _agressively_ opinionated framework... some of these opinions are at best, misguided :) YMMV. It also doesn't support all browsers, nor multiple windows (a deal breaker for many).

## Requires
1. [node](https://nodejs.org/en/)
1. [git](https://git-scm.com/)

## Setup
1. clone: `git@github.com:qualityshepherd/cypress-example.git`
1. install: `npm i`

## Run Them Tests
1. all'vum: `npm test`
1. just homePage: `npm run cy:home`
1. headless: `npm run cy:headless`


---

![Test Run Gif](https://qualityshepherd.com/screencasts/cypress_testrun.gif)