const inquirer = require('inquirer');

const fs = require('fs');


function askQuestions() {

    const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this project?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others contribute to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How do you test this project?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        }
    ];


    return inquirer.prompt(questions);
}


function generateReadme(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, contact me at [${answers.email}](mailto:${answers.email}) or [visit my GitHub profile](https://github.com/${answers.github}).
    `;
}


function writeReadme(readmeContent) {
    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) throw err;
        console.log('README.md has been generated!');
    });
}

function init() {
    askQuestions()
        .then(generateReadme)
        .then(writeReadme)
        .catch((error) => {
            console.error('Error generating README:', error);
        });
}


init();
