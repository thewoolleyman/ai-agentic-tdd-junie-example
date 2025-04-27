# Testing Example App - Requirements Document

## Overview
This document outlines the requirements for implementing a simple registration form application using Test-Driven Development (TDD) principles. The application will be a "Walking Skeleton" designed to learn tools, architecture patterns, and processes rather than to be a fully functional app.

## Application Architecture
- A pure-javascript React web app
- Deployed on Netlify
- With serverless backend, serving an API endpoint via a serverless function
- The React app calls the serverless API endpoint to post a request and receive a response

## Development Approach
- Develop everything with Test-Driven Development (TDD)
- Perform full-stack testing at multiple levels of the testing pyramid
- Make small, frequent commits
- Ensure that tests stay green
- Use best practices for E2E tests, e.g., data attribute selectors in Cypress tests

## Technology Stack
- **Frontend**: React, Next.js
- **Backend**: Netlify Functions (serverless)
- **Testing Frameworks**:
  - Cypress for E2E tests
  - Vitest for unit tests
  - React Testing Library for component tests

## User Interface Requirements
1. A "Registration" webpage with an email and password field, and a "Register" button
2. Validation on the email and password values
3. When the "Register" button is pressed, validation will be performed
4. If validation fails, the failure reason is displayed
5. If validation passes, "Hello <email>!" is displayed
6. The form should reset when the page is refreshed

## Implementation Plan

### Iteration 0: Create app skeleton with testing framework, and hook it up to CI
- Write the entire app in javascript, with a UI (web) and serverless (API) component
- Use netlify `next.js` template as starting point to create initial repo
- Introduce Cypress testing framework with placeholder E2E tests
- Introduce Vitest testing framework with placeholder Unit tests
- Hook up Vitest `test-unit` to Netlify via a Netlify Build Plugin

### Iteration 1: Registration form with basic validation
- Display a user registration form as a web page
- Follow Test-Driven Development and write tests first
- Add an email field and hook it up to a serverless function
- The serverless function should return the name in the response structure
- Implement form with email and password fields and a "register" button
- Implement form validation:
  - Email must not be blank
  - Password must not be blank
  - Password must be at least 10 characters long
- Display descriptive error messages for validation failures
- Display "Registration successful!" when validation passes
- Reset the form when the page is refreshed

### Iteration 2: Add email validation
- Use a third-party library for validating that the "email" field is a valid email

### Iteration 3: Add email validation on the backend
- Implement the same validation on the server as on the client
- Use a POST request to the serverless function
- Share validation logic between client and server (DRY principle)

## Testing Guidelines
- Write tests before implementing features (TDD)
- Use Cypress for end-to-end testing
- Use Vitest for unit testing
- Use React Testing Library for component testing
- Follow the testing pyramid approach
- Use data attribute selectors in Cypress tests
- Ensure all tests pass before committing changes

## Development Environment Setup
- Use JetBrains WebStorm IDE
- Run Netlify locally with `npx netlify dev`
- Run Cypress tests with `npx cypress run`
- Configure Vitest for unit testing
- Rename component test files and component files to `*.jsx` for Vitest compatibility