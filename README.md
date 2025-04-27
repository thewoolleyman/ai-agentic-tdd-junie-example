# Testing Example App

## Agentic AI Exploration with JetBrains Junie

Everything in this repo except for this paragraph and the original `.junie/guidelines.md` were created via the JetBrains Junie agentic AI tool. `guidlines.md` was originally imported from [an existing Word doc I had and exported to Markdown](https://docs.google.com/document/d/1xHXFYQ8SFza0Te_CYOV_A0pc_gQN2elWdB5b0jCkvtY/edit?tab=t.0#heading=h.8om2kbm4x2w5) As you can see from the git history, it took less than an hour. 🤖 🤔

## Project Purpose
This project was created to illustrate the ability of Junie AI to create an app based on original requirements in `.junie/guidelines.md`. It serves as a demonstration of how to implement a simple web application following TDD practices.

## Overview
This is a simple React application built to demonstrate Test-Driven Development (TDD) principles. The app features a basic registration form with client-side validation.

## What's Implemented
- Registration form with email and password fields
- Client-side validation:
  - Email must not be blank
  - Password must not be blank
  - Password must be at least 10 characters long
- Success message display on successful registration
- Comprehensive test suite using Vitest and React Testing Library

## Technologies Used
- Next.js for the React framework
- Vitest for unit testing
- React Testing Library for component testing
- Netlify for deployment

## Running the App
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Run tests: `npm test`
