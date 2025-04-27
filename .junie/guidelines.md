# Testing Example App

# Table of Contents

[Repo](#repo)

[Tools](#tools)

[Development and Collaboration Tools](#development-and-collaboration-tools)

[Application Architecture](#application-architecture)

[Goals](#goals)

[App Requirements](#app-requirements)

[Iteration 0: Create app skeleton with testing framework, and hook it up to CI](#iteration-0:-create-app-skeleton-with-testing-framework,-and-hook-it-up-to-ci)

[Iteration 1: Registration form with basic validation](#iteration-1:-registration-form-with-basic-validation)

[Iteration 2: Add email validation](#iteration-2:-add-email-validation)

[Iteration 3: Add email validation on the backend](#iteration-3:-add-email-validation-on-the-backend)

[References](#references)

[Testing](#testing)

[Frameworks](#frameworks)

[nodejs](#nodejs)

[cypress](#cypress)

[Platforms](#platforms)

[Netlify](#netlify)

[Netlify Initial Setup](#netlify-initial-setup)

[Netlify Local Dev Environment](#netlify-local-dev-environment)

[Netlify Functions](#netlify-functions)

[Netlify Build Plugins](#netlify-build-plugins)

[Next.js Testing](#next.js-testing)

[React Testing Library:](#react-testing-library:)

[Netlify Testing](#netlify-testing)

# Repo {#repo}

* Main app to be developed with [TDD](https://en.wikipedia.org/wiki/Test-driven_development): [https://github.com/thewoolleyman/testing-example-app](https://github.com/thewoolleyman/testing-example-app)  
* [Spike](https://en.wikipedia.org/wiki/Spike_\(software_development\)) app for learning and exploration of tools and approaches: [https://github.com/thewoolleyman/testing-example-app-dry-run](https://github.com/thewoolleyman/testing-example-app-dry-run) 

# Tools {#tools}

## Development and Collaboration Tools {#development-and-collaboration-tools}

*  We will use [JetBrains WebStorm IDE](https://www.jetbrains.com/webstorm/).  
* We will experiment with doing "Mob Programming" using the , using the "Code with Me" collaborative feature which allows anyone to drive concurrently.  
* Just using the "Code with Me" feature is free  
* Zoom room:  [https://us02web.zoom.us/j/81606482382](https://us02web.zoom.us/j/81606482382) 

## Application Architecture {#application-architecture}

* A pure-javascript React web app  
* Deployed on Netlify  
* With serverless backend, serving an API endpoint via a serverless function  
* The React app calls the serverless API endpoint to post a request and receive a response  
* This will not be a fully functional or even useful app. It is only a ["Walking Skeleton"](https://wiki.c2.com/?WalkingSkeleton) to learn tools, architecture patterns, and processes.

# Goals {#goals}

* Develop everything with [TDD (test-driven-development)](https://en.wikipedia.org/wiki/Test-driven_development)  
* Perform full-stack testing at multiple levels of the testing pyramid: [https://martinfowler.com/articles/practical-test-pyramid.html](https://martinfowler.com/articles/practical-test-pyramid.html)   
* Do small, frequent commits  
* Ensure that the tests stay green (we won't have a real "CI", but netlify runs cypress tests against the app after it deploys)  
* Use best practices for E2E tests, e.g. data attribute selectors in Cypress tests: [https://docs.cypress.io/guides/references/best-practices\#Selecting-Elements](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements)   
* Use a [separate "dry run" project](https://github.com/thewoolleyman/testing-example-app-dry-run) to learn and explore before beginning TDD in the main app. This is an example of a "[Spike](https://en.wikipedia.org/wiki/Spike_\(software_development\))".

# App Requirements {#app-requirements}

**HIGH LEVEL USER INTERFACE REQUIREMENTS:** 

1. A "Registration" webpage with an email and password field, and a "Register" button.  
2. There will be some validation on the email and password values.  
3. When the "Register" button is pressed, validation will be performed  
4. If validation fails, the failure reason is displayed.  
5. If validation passes, "Hello \<email\>\!" is displayed.  
6. That's it. That's the app. Nothing else (for now). The point is to learn, not to make anything useful ;)

**NOTE: The specific requirements in the iteration plan below are vague and sometimes a bit inconsistent. Just like real world requirements 😈\! We will "make it up as we go", with the Coach playing the role of the User/Stakeholder.** 

**LEGEND:**  
💡= Idea or general guideline  
✅= Specific(-ish) task or user-facing deliverable

## Iteration 0: Create app skeleton with testing framework, and hook it up to CI {#iteration-0:-create-app-skeleton-with-testing-framework,-and-hook-it-up-to-ci}

* 💡Write the entire app in javascript, with a UI (web) and serverless (API) component.  
* ✅Use netlify \`next.js\` template as starting point to create initial repo  
* ✅Introduce Cypress (top of the pyramid) testing framework with placeholder E2E tests (comes with netlify \`next.js\` template)  
* ✅Introduce Vitest (bottom of the pyramid) testing framework with placeholder Unit tests (must be installed)  
* ✅Hook up Vitest \`test-unit\` to Netlify, via a [Netlify Build Plugin](https://docs.netlify.com/integrations/build-plugins/create-plugins/#plug-in-to-build-events) (see more docs below on [Netlify Build Plugins](#netlify-build-plugins)), to block deploy if any unit tests fail. This goal will give us some experience on learning how to hook up tests via a third-party build API, as well as writing javascript "glue code" to hook our unit tests in to the Netlify build process.  
  * ✅Create minimal build plugin  
  * ~~Change plugin to hook up \`npm run test-unit\`, and fail the build if the tests fail.~~ See [https://www.digitalocean.com/community/tutorials/how-to-launch-child-processes-in-node-js](https://www.digitalocean.com/community/tutorials/how-to-launch-child-processes-in-node-js) for an example of invoking a child process from node/js.  
    * NOTE: We were not successful, probably because netlify build does not allow \`exec\` from node \`child\_process\` to be used because of security concerns.

## Iteration 1: Registration form with basic validation {#iteration-1:-registration-form-with-basic-validation}

* ✅Display a user registration form as a web page  
* 💡Try to do Test-Driven Development and write tests first\!  
  * [https://nextjs.org/docs/testing](https://nextjs.org/docs/testing)   
  * [https://github.com/vercel/next.js/tree/canary/examples/with-vitest](https://github.com/vercel/next.js/tree/canary/examples/with-vitest)   
  * See docs on react-testing-library [below](#react-testing-library:)  
  * NOTE:  
    * You will need to add a vitest config: [https://github.com/vercel/next.js/blob/canary/examples/with-vitest/vitest.config.ts](https://github.com/vercel/next.js/blob/canary/examples/with-vitest/vitest.config.ts)   
    * Your component test files and component files need to be renamed to \`\*.jsx\` in order to be correctly picked up by vitest.  
* Add an email field and hook it up to a serverless function (as has already been done in the dry run app)  
* To start with, the serverless function should just return the name in the response structure  
* The form should have the following fields: email and password  
* The form should have a "register" button  
* Form validation is performed when register is clicked:  
  * Email must not be blank  
  * Password must not be blank  
  * Password must be at least 10 characters long  
* Validation failures display a descriptive error  
* If validation passes, the page displays "Registration successful\!"  
* If the page is refreshed, the registration form is displayed again  
* That's it. The email/password is not stored anywhere, and there is no more functionality.

## Iteration 2: Add email validation {#iteration-2:-add-email-validation}

* Use a third-party library for validating that the "email" field is a valid email.

## Iteration 3: Add email validation on the backend {#iteration-3:-add-email-validation-on-the-backend}

* The server should validate the same as the client  
* It should be via a POST to the serverless function.  
* The validation logic should be shared (DRY, red-green-refactor)

# References {#references}

## Testing {#testing}

* Testing Pyramid: [https://martinfowler.com/articles/practical-test-pyramid.html](https://martinfowler.com/articles/practical-test-pyramid.html)   
* Test Driven Development: [https://en.wikipedia.org/wiki/Test-driven\_development](https://en.wikipedia.org/wiki/Test-driven_development)   
* Four Phase Test: [https://thoughtbot.com/blog/four-phase-test](https://thoughtbot.com/blog/four-phase-test)  
* Test Doubles: [https://martinfowler.com/bliki/TestDouble.html](https://martinfowler.com/bliki/TestDouble.html)

## Frameworks {#frameworks}

### nodejs {#nodejs}

* nodejs (npm): [https://nodejs.org/en/](https://nodejs.org/en/)   
* Prefix executables (like \`netlify\` or \`cypress\`) with \`npx\`

### cypress {#cypress}

* cypress: [https://www.cypress.io/](https://www.cypress.io/)   
  * Run cypress for netlify:  
    * \`npx netlify dev\`  
    * \`npx cypress run\`  
* Why does netlify still deploy the site if tests fail??? \- see [https://github.com/cypress-io/netlify-plugin-cypress\#failing-the-deploy](https://github.com/cypress-io/netlify-plugin-cypress#failing-the-deploy) 

## Platforms {#platforms}

### Netlify {#netlify}

Netlify: [https://www.netlify.com/](https://www.netlify.com/) 

#### Netlify Initial Setup {#netlify-initial-setup}

* Netlify templates: [https://app.netlify.com/start-with-template](https://app.netlify.com/start-with-template)   
* Netlify next.js starter template: [https://github.com/netlify-templates/next-netlify-starter](https://github.com/netlify-templates/next-netlify-starter) 

#### Netlify Local Dev Environment {#netlify-local-dev-environment}

* \`netlify dev\`: [https://docs.netlify.com/cli/get-started/\#run-a-local-development-environment](https://docs.netlify.com/cli/get-started/#run-a-local-development-environment)   
* \`netlify build\`: [https://docs.netlify.com/cli/get-started/\#run-builds-locally](https://docs.netlify.com/cli/get-started/#run-builds-locally)   
* Netlify dev docs: [https://github.com/netlify/cli/blob/main/docs/netlify-dev.md](https://github.com/netlify/cli/blob/main/docs/netlify-dev.md)   
* 

#### Netlify Functions {#netlify-functions}

* netlify functions overview: [https://docs.netlify.com/functions/overview/](https://docs.netlify.com/functions/overview/)   
* serving functions locally: [https://cli.netlify.com/functions-dev/](https://cli.netlify.com/functions-dev/) 

#### Netlify Build Plugins {#netlify-build-plugins}

* Docs:  
  * [https://docs.netlify.com/integrations/build-plugins/create-plugins/\#plug-in-to-build-events](https://docs.netlify.com/integrations/build-plugins/create-plugins/#plug-in-to-build-events)   
* Template:  
  * [https://github.com/netlify/build-plugin-template](https://github.com/netlify/build-plugin-template)  
* Blog Posts:  
  * [https://www.netlify.com/blog/2019/10/16/creating-and-using-your-first-netlify-build-plugin/](https://www.netlify.com/blog/2019/10/16/creating-and-using-your-first-netlify-build-plugin/)   
  * [https://www.netlify.com/blog/2020/04/30/whats-a-netlify-build-plugin-series-part-1-using-build-plugins](https://www.netlify.com/blog/2020/04/30/whats-a-netlify-build-plugin-series-part-1-using-build-plugins)   
  * [https://www.netlify.com/blog/2020/05/20/whats-a-netlify-build-plugin-series-part-2-making-build-plugins/](https://www.netlify.com/blog/2020/05/20/whats-a-netlify-build-plugin-series-part-2-making-build-plugins/)  
  * [https://www.netlify.com/blog/2020/05/26/whats-a-netlify-build-plugin-series-part-3-sharing-build-plugins/](https://www.netlify.com/blog/2020/05/26/whats-a-netlify-build-plugin-series-part-3-sharing-build-plugins/) 

#### Next.js Testing {#next.js-testing}

* [https://nextjs.org/docs/testing](https://nextjs.org/docs/testing)   
* [https://github.com/vercel/next.js/tree/canary/examples/with-vitest](https://github.com/vercel/next.js/tree/canary/examples/with-vitest) 	  
* Vitest API: [https://vitest.dev/api/](https://vitest.dev/api/)   
* Vitest before/after hooks:  
  *  [https://vitest.dev/api/\#beforeeach](https://vitest.dev/api/#beforeeach)   
  * [https://vitest.dev/guide/test-context.html](https://vitest.dev/guide/test-context.html) 

#### React Testing Library: {#react-testing-library:}

* Docs for the react-specific API: [https://testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/)   
* Docs for core queries: [https://testing-library.com/docs/queries/about](https://testing-library.com/docs/queries/about)   
* Page with external examples: [https://testing-library.com/docs/example-external](https://testing-library.com/docs/example-external)   
* Live-editing tutorial and playground:  [https://testing-playground.com/](https://testing-playground.com/)   
* VIdeo overview: [https://www.youtube.com/watch?v=JKOwJUM4\_RM](https://www.youtube.com/watch?v=JKOwJUM4_RM)   
* Github page:  [https://github.com/testing-library/react-testing-library](https://github.com/testing-library/react-testing-library) 

#### Netlify Testing {#netlify-testing}

* Fix chromium bug on M1 Macs: [https://linguinecode.com/post/how-to-fix-m1-mac-puppeteer-chromium-arm64-bug](https://linguinecode.com/post/how-to-fix-m1-mac-puppeteer-chromium-arm64-bug)   
* Cypress: \`npx cypress run\` (with \`npx netlify dev\` already running)

