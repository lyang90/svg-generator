const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle } = require('./lib/shape');



// List of of messages to get information for logo
const questions = [
    { message: 'Enter text for logo:', name: 'text' },
    { message: 'Enter text color:', name: 'color' },
    { message: 'Pick the shape for logo:', name: 'shape', type: 'list', choices: ['Circle', 'Square', 'Triangle'] },
    { message: 'Enter the shape color:', name: 'shapeColor' }
];


// Using inquirer to prompt the messages in console and write to the file
inquirer
    .prompt(
        questions
    )
    .then((response) => {
        const fileName = './examples/logo.svg';
        const svg = renderSvg(response)

        fs.writeFile(fileName, svg, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg.'));


    })

// This function creates the object of the shape the user choose while sets the color and renders it
function createShape(data) {
    let shape;
    if (data.shape === 'Circle') {
        shape = new Circle();
    }

    if (data.shape === 'Square') {
        shape = new Square();
    }

    if (data.shape === 'Triangle') {
        shape = new Triangle();
    }

    shape.setColor(data.shapeColor);
    return shape.render();
}

// The renderSvg function returns the generated svg content with and calling the createShape class to get the shape
function renderSvg(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${createShape(data)}
  
    <text x="150" y="${data.shape === 'Triangle' ? "175" : "125"}" font-size="60" text-anchor="middle" fill="${data.color}">${data.text}</text>
  
  </svg>`;
}