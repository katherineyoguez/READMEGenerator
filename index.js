const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require('./util/generateMarkdown');


// array of questions for user
const questions = [{
        type: "input",
        message: "What is the title of your project?",
        name: "Title"
    }, {
        type: "input",
        message: "What is the project about?",
        name: "Description"
    }, {
        type: "input",
        message: "Provide installation instructions",
        name: "Installation"
    }, {
        type: "input",
        message: "How do you use this app?",
        name: "Usage"
    }, {
        type:"list",
        message:"Provide license or badge link",
        name:"License",
        choices: ["Apache 2.0 License", "BSD 3-Clause License", "BSD 2-Clause License", "Attribution 4.0 International", "Attribution-ShareAlike 4.0 International", "Attribution-NonCommercial 4.0 International", "Attribution-NoDerivates 4.0 International", "Attribution-NonCommmercial-ShareAlike 4.0 International", "Attribution-NonCommercial-NoDerivatives 4.0 International", "Eclipse Public License 1.0", "GNU GPL v3","GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3", "IBM Public License Version 1.0", "The MIT License", "Mozilla Public License 2.0", "The zlib/libpng License"]
    }, {
        type: "input",
        message: "What tools were used?",
        name: "Tools"
    }, {
        type: "input",
        message: "Who contributed to this project?",
        name: "Contributing"
    }, {
        type: 'input',
        message: 'What is your Github username?',
        name: 'Username'
    }, {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email'
    },

]

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })

}


function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)

        })

}

init();