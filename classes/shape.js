class Shape{
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render(){
        
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill= "${this.shapeColor}" />`;
    }
}

class Square extends Shape{
    render(){
        return `<rect x="100" y ="100" fill= "${this.shapeColor}"/>`;
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}