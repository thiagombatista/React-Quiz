
https://youtu.be/F2JCjVSZlG0
React / Typescript Tutorial - Build a Quiz App

Next Version:
(A) 2 persons can play and compare they results for the same quiz
    * when both finishes, they see the results
        * improvement: the results could be by category
        * Next Version:
            * they can see the results and each could review the questions with their and the oponent results


Now on:
(A)
- user access app' url
- user fills name and specific code
- server checks if code is ok
- server sum up +1 into connectedUsers variable
- server checks if there are less than 2 (0, 1) users connected - only 2 will be allowed
    - if there is 0 -> show a waiting for the opponent' info
    - if there is 1 -> start the game for both
- users plays until answer the last question
    - a msg is sent to the server with user' name and score / NOT NOW -> array of answers
    - server checks if the other opponnent already finished (boolean)
        - if false, send this variable = false
            - show a waiting for the opponent' info
            - wait for refresh
        - if true, send this variable = false & 2 arrays with name, score
            - send to both users
- users sees the scores
- when finishes
    - renew the server variables and delete temp infos (name, score)






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
