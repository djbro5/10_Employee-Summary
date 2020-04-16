## PROJECT TITLE

Software Engineering Team Generator

## PROBLEM DESCRIPTION  

Managers want to be able to use a computer to put together a software engineering team and display it in a graphical form.

## USER STORY:

As a MANAGER
I WANT to generate a webpage that displays my team's basic info
so THAT I have quick access to emails and GitHub profiles

## APPLICATION DESCRIPTION

The application will prompt the user for information about the team manager and then information about the team members. Team menbers comprise of engineers and interns and any number of each can be created. When all team members have been entered, the application will then create an HTML file that displays a formatted team roster that matches the information entered. 

### a) OPERATION

1. Open a bash terminal.
2. Make sure dependencies are installed. If not sure, enter at command prompt, 'npm install' and wait until installed.
3. At command prompt, enter 'node app.js' and wait until Node CLI application loads.
4. When asked, enter details to build innovation team
5. Wait for program to process entered details and display Success!
6. Open team.html to display your Innovation Team!

Screen_images folder contains two png screen images of working application
Name of the images are:

1. image_CLI-application-functionality.png
2. image_Innovation-Team.png

Note:

To check if npm is installed enter at command prompt: npm -v
6.13.4 should be displayed.

To check if node.js is installed , enter at command prompt: node -v
v12.16.1 should be displayed.

### b) DEVELOPMENT

MANY HOURS were spent developing and TESTING this software to ensure it functions correctly as per user story.

The application is built with the following directory structure:

> lib/                                 // classes and helper code
> node_modules
> output/                         // rendered output
> templates/                    // HTML template(s)
V test/                              // jest tests
        Employee.test.js
        Engineer.test.js
        Intern.test.js
        Manager.test.js
JS app.js                            // Runs the application
{ } package-lock.json
{ } package.json
    .gitignore
README.md     

Technologies used:
* html
* JavaScript
* JSON
* Bootstrap
* dependencies:
    - inquirer - for input
    - jest - for testing

## LICENSE

MIT License

Copyright (c) 2020 David Brown

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.







