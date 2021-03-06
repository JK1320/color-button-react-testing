# Getting Started with Create React App

Udemy Course: Testing React with Jest and Testing Library


* npm test 
* Wallaby.js    (extension for checking testing errors, free? )
* jest and react testing library work together:
        - to get DOM elements use testing library queries (provides virtual DOM for tests)
        - jest is javascript testing library (using methods)
                        - jest is test runner: finds and runs tests, determines whether tests pass or fail
                        - jest assertions: determines whether test passes or fails. Assertions starts with global expect(subject of assertion) method & then a matcher example; toBeInTheDocument() 
* Test-driven development =>=> should write test first then create every element in application 
* screen object comes from testing library
* installed this:    npm install eslint-plugin-testing-library eslint-plugin-jest-dom

<<--------------------->>

types of tests:

=> Unit Tests: test one unit of code; one component, one function etc

=> integration tests: tests the interaction between units

=> functional tests: tests particular function of a software(function behavior)

=> acceptance/ end-to-end (E2E) tests ; uses browser and server (cypress, selenium)

<<---------------------->>

Testing Library and accessibility (screen readers etc):
- https://testing-library.com/docs/queries/about/#priority
- W3C has role definition: https://www.w3.org/TR/wai-aria/#role_definitions

-------------------------------------------------

I got error after running:  npm test

"Failed to initialize watch plugin "node_modules/jest-watch-typeahead/filename.js":

which I resolved by running:

npm i d --exact jest-watch-typeahead@0.6.5

as indicated in stack overflow:

https://stackoverflow.com/questions/70204039/failed-to-initialize-watch-plugin-node-modules-jest-watch-typeahead-filename-js

-------------------------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
