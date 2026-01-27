function Rectangle(widthVal=0, heightVal=0) {
    var width = widthVal, height = heightVal;
    var area = null, perimeter = null;

    
    this.getHeight = function() {
        return height;
    }

    this.getWidth = function() {
        return width;
    }

    this.setHeight = function(val) {
        height = val;
        _clearCache();
    }

    this.setWidth = function(val) {
        width = val;
        _clearCache();
    }

    this.getArea = function() {
        return _calculateArea();
    }

    this.getPerimeter = function() {
        return _calculatePerimeter();
    }

    this.getDetails = function() {
        const areaVal = _calculateArea();
        const perimeterVal = _calculatePerimeter();

        console.log("Height: " + height + ", " + "Width: " + width);
        console.log("Area: " + areaVal);
        console.log("Perimeter: " + perimeterVal);
        
    }


    const _calculateArea = function() {
        area = area === null ? width * height : area; 
        return area;
    }

    const _calculatePerimeter = function() {
        perimeter = perimeter === null ? (2 *( height + width)): perimeter;
        return perimeter;
    }

    const _clearCache = function() {
        area = null; perimeter = null;
    }
};


const rec1 = new Rectangle(1, 3);
