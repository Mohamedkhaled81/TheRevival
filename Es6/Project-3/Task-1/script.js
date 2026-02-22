class Polygon {
    constructor(ctx, posX, posY, color) {
        if(this.constructor === Polygon) {
            throw new Error("This is abstract class!")
        }
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.color = color;
    }
    drawShape() {}
    toString() {}
    calcArea() {}
}

class Rectangle extends Polygon {
    constructor(ctx, x, y, width, height, color) {
        super(ctx, x, y, color);
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.width * this.height;
    }

    toString() {
        return `Rectangle => Position: x:${this.posX} y:${this.posY}\nArea: ${this.calcArea()}\nColor: ${this.color}`;
    }

    drawShape() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
}

class Square extends Rectangle {
    constructor(ctx, x, y, sideLen, color) {
        super(ctx, x, y, sideLen, sideLen, color);
    }
    toString() {
        return `Square => Position: x:${this.posX} y:${this.posY}\nArea: ${this.calcArea()}\nColor: ${this.color}`;
    }

}

class Circle extends Polygon {
    constructor(ctx, x, y, radius, color) {
        super(ctx, x, y, color);
        this.radius = radius;

    }
    calcArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    toString() {
        return `Circle => Position: x:${this.posX} y:${this.posY}\nArea: ${this.calcArea()}\nColor: ${this.color}`;
    }
    drawShape() {
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

}

class Triangle extends Polygon {
    constructor(ctx, point1, point2, point3, color) {
        super(ctx, 0, 0, color);
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }

    drawShape() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.point1.x, this.point1.y);
        this.ctx.lineTo(this.point2.x, this.point2.y);
        this.ctx.lineTo(this.point3.x, this.point3.y);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
    calcArea() {
        const [A, B, C] = [this.point1, this.point2, this.point3];
        return Math.abs((A.x*(B.y-C.y) + B.x*(C.y-A.y) + C.x*(A.y-B.y)))/2;
    }

    toString() {
        return `Triangle => Area: ${this.calcArea()}\nColor: ${this.color}`;
    }
    
}