// Parent class of all the shape classes
class Shape{
    setColor(color){
        this.color = color;
    }

    render(){
        return console.log('This is not working! UGH!');
    }

}

// Different shape classes which renders the all the shapes for logo and inherits from the Shape class
class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill= "${this.color}" />`;
    }
}

class Square extends Shape{
    render(){
        return `<rect width="150" height="150" x="10" y ="10" fill= "${this.color}"/>`;
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

// exports the classes to import in another file
module.exports = {Shape, Circle, Square, Triangle};