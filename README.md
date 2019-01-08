# i2C tech test

This is my attempt at an i2C tech test, which uses React, Express, and Node to visualise CSV data in a dashboard format.

## My approach

The DataController in the Node API backend parses the CSV data (using [csvtojson](https://www.npmjs.com/package/csvtojson)) for the weekly and top line data files, via the getWeeklyData and getTopData static methods. The parsed data is served by Express as two separate endpoints, and sent as JSON in response to GET requests for universal compatibility. The React frontend fetches the JSON using [axios](https://www.npmjs.com/package/axios), then displays the data using [react-vis](https://uber.github.io/react-vis/). MaterialUI is used for styling the frontend.

I used Mocha/Chai for backend testing, and Jest/Enzyme for frontend testing. I adopted a TDD approach for this project.

## Installation

First, clone the repository.

To run the backend API:

- `cd api/v1`
- `npm install` to install dependencies
- `npm test` to run tests
- `npm start` to serve the API on port 4000
