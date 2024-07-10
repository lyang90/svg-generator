# SVG Generator

## Description

This project is for generating a logo using SVG and revolves around using object oriented programming to create this project. While working through this project I learned how to create classes and have them inherit from a parent class. Also, I using a JEST to create a test to test the render() method within the classes to see accurately see if the functions was outputting the right values.


## Installation

To install this project, you can simply download the code from github or clone the repo to be able to use the svg generator.
  
## Usage

To run the project itself you must have Node.js installed and open up the terminal. After opening up the terminal run npm install and run the code by typing node index.js. By doing the prompts will appear and ask you to enter information regarding the logo. Then a SVG file will be generate and with that file you can open it up in the browser and look at the logo that was created. The first image is when the user is prompted to add the logo information. The second is the file already been generated and then the last is the actually SVG file open up in the browser.

![](/images/prompt.png)
![](/images/file.png)
![](/images/svg.png)

## Credits

- Basic Shapes SVG MDN Docs https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
- Texts SVG MDN Docs https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts

## Tests
- The test for this project is the same one for different classes. The test is testing if the render() method of each classes returns the correct output for the each shape class after the color has been set. The results for each test for the classes passed.
![](/images/test.png)
