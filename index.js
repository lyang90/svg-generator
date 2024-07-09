const inquirer = require("inquirer");
const fs = require("fs");

// TODO: ADD COMMENTS & CREATE THE TEST FOR THE RENDER METHOD
const questions = [{message: 'Enter text for logo:', name: 'text'}, {message: 'Enter text color:', name: 'textColor'}, {message: 'Pick the shape for logo:', name: 'shape'}, {message: 'Enter the shape color:', name: 'shapeColor'}];

inquirer
.prompt(
    questions
)
.then((response)=> {
    const fileName = './examples/logo.svg';
    const svg = renderSvg(response)

    fs.writeFile(fileName, svg, (err) => 
    err ? console.log(err) : console.log('Generated logo.svg.'));

    
})

function createShape(data){
    if(data.shape === 'circle'){
        const circle = new Circle();
        circle.render();
    }

    if(data.shape === 'square'){
        const square = new Square();
        square.render();
    }

    if(data.shape === 'triangle'){
        const triangle = new Triangle();
        triangle.render();
    }
}

function renderSvg(data){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${createShape(data)}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
  
  </svg>`;
}