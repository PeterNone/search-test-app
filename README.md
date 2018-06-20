# Info

I do like the application that is slowly building up with this test. I see that I can spend more time with it and it would be even better.

I never did before Infinite Scroll in any application so this was a point that I was very interested to do cause It's a new knowledge for me. Now I do know how to implement it in the future.

I did concentrate on more front end and design of the app. Rather than the back end. I could do it in PHP but this is a legacy code for you. In the future, I will introduce Python REST api to this project as my own exercise.

I did not implement tests but in other tests on my github tests are done.

More info about it in "What would I do if I would have more time".

## Workflow

I started with creating new react app using

    create-react-app

to speed setup up.

I added:

-    Redux
-    Redux Form - for quick form handling in redux.
-    Axios - ajax requests helper library as quick middleware for ajax requests for redux
-    Json-Server - I used it as a quick REST api. I also used the build in full-text search instead of creating my own. I set it up as a quick proxy in package.json
- npm-run-all - to run at the same time react app and node to serve json-server, with the same node commend "npm start". Changes in package.json
-    Bootstrap - SASS for styling
-    Added some css helper classes of my own, that I like to have when working with Bootstrap, to index.css
- Waypoint - to handle Infinite Scroll.
- Recharts - for displaing small chart showing price change
- React Router - to create routes cause I do think that sending url with search options is important for building a search engine
- React Transition - to animate ui and page change. That is a nice touch but can be extended with Material Design animation patterns to be more meaningful
 



# Environment Setup

Clone or download this repo.

## Install global packages

> Install [Node](https://nodejs.org/en/download/)

Navigate to the folder containing this repo files and install local packages by entering a command


    npm install

---

## Start Development

Run Local Server

    npm start



Run Build

    npm run build

---


## What would I do if I would have more time

I user Json-Server to speed things up with setting up REST api, But in given time I must cut the corners to make things done. But in the future, I think that is going to be a perfect startup for me to create Python REST api and replace it.

---

## Solutions that I would do

- Cleaned up Bootstrap SASS for unused css.

- Block loading the results again after returning from product details page.

- Add more care around axios ajax requests to handle errors during requests

- Create tests for the whole application, but I got other apps in github that can show that I can do them.

- Add a polyfill to ad support for IE 10 and 9 cause React is not shipped with them by default.

- Added sorting and results per page to whith I already left myself gate open in actions/types.js

---


## Downsides

Size of application js and css file.

Lack of error handling during ajax requests.

Lack of polyfills to cover support for IE 9 and 10.