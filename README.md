Unit Testing using Mocha and Chai (NodeJS)
1. Getting Started

Mocha and Chai are two JavaScript frameworks commonly used together for unit testing. Mocha is a testing framework that provides functions that are executed according in a specific order, and that logs their results to the terminal window. Chai is an assertion library that is often used alongside Mocha. It provides functions and methods that help you compare the output of a certain test with its expected value. Chai provides clean syntax that almost reads like English.

2. Prerequisites

Your Machine should have node and npm installed. Install Node.js LTS version from Node website (npm gets installed along with node automatically).
Mocha is a JavaScript Test Framework that runs on Node.js and Browser.
Chai is BDD/TDD assertion library that can be paired with any javascript testing framework.


3.Installing

-Installation Node.JS
npm -v // will return installed npm version
node -v // will return installed node version

-Installation Mocha through the terminal or cmd
npm install --global mocha
npm install --save-dev mocha

Note: To run Mocha, we need Node.js v4 or newer.
—- global helps to install the Mocha on computer at global level which helps to run mocha test through command line.
—- save-dev helps to add the mocha as dependency in package.json file for that particular project.

-Installation Chai
npm install --save-dev chai