// Classes imported
const {Circle, Square, Triangle } = require('./lib/shape');


// A test for the render method of each class shape
describe('Circle', () => {
    it('should take the render the color and shape correclty', () =>{
        const shape = new Circle();
        shape.setColor('blue');
        expect('<circle cx="150" cy="100" r="80" fill= "blue" />');
    })
})

describe('Triangle', () => {
    it('should take the render the color and shape correclty', () =>{
        const shape = new Triangle();
        shape.setColor('black');
        expect('<polygon points="150,18 244,182 56,182" fill="black" />');
    })
})

describe('Square', () => {
    it('should take the render the color and shape correclty', () =>{
        const shape = new Square();
        shape.setColor('#ffc8dd');
        expect('<rect x="100" y ="100" fill= "#ffc8dd"/>');
    })
})

