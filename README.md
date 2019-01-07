# i2C tech test

This is my attempt at an i2C tech test, which uses React, Express, and Node to visualise CSV data in a dashboard format.

## My approach

The DataParser class in the Node backend parses the CSV data for the weekly and top line data files, via the parseWeeklyData and parseTopData methods. The parsed data is served by Express as two separate endpoints, and sent as JSON in response to GET requests for universal compatibility. The React frontend fetches the JSON using [axios](https://www.npmjs.com/package/axios), then displays the data using [react-vis](https://uber.github.io/react-vis/). MaterialUI is used for styling the frontend.

I used Mocha/Chai for backend testing, and Jest/Enzyme for frontend testing. I adopted a TDD approach for this project.
