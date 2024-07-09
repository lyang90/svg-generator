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
        return `<rect x="100" y ="100" fill= "${this.color}"/>`;
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

module.exports = {Shape, Circle, Square, Triangle};