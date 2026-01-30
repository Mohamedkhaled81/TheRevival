function Vehicle(velocityVal=null, colorVal=null) {
    if(this.constructor === Vehicle) {throw new Error("Can not create instance from Vehicle!")}
    if(velocityVal === null || colorVal === null) {throw new Error("Please Enter All Properties")}
    if(velocityVal.constructor !== Number ||  colorVal.constructor !== Number) {throw new Error("Color and speed must be of type Number!")}
    Object.defineProperties(this, {
        velocity: {
            value: velocityVal,
            enumerable: false,
            configurable: false,
            writable: true
        },
        color: {
            value: colorVal,
            enumerable: false,
            configurable: false,
            writable: false
        },
        vehicleOn : {
            value: false,
            enumerable: false,
            configurable: false,
            writable: true
        }
    })
}

function Bicycle(velocityVal=null, colorVal=null) {
    Vehicle.call(this, velocityVal, colorVal);
}

function MotorVehicle(velocityVal=null, colorVal=null, sizeOfEngineVal=null, licencePlateVal=null){
    if(this.constructor === MotorVehicle) {throw new Error("Can not create instance from Motor-Vehicle!")}
    Vehicle.call(this, velocityVal, colorVal)
    if(sizeOfEngineVal === null || licencePlateVal === null) {throw new Error("All properties are required!")}
    if(sizeOfEngineVal.constructor !== Number || licencePlateVal.constructor !== String) {throw new Error("Invalid values!")}
    Object.defineProperties(this, {
        _sizeOfEngine: {
            value: sizeOfEngineVal,
            enumerable: false,
            configurable: false,
            writable: false
        },
        _licencePlate: {
            value: licencePlateVal,
            enumerable: false,
            configurable: false,
            writable: false
        }
    })
}

function Car(velocityVal=null, colorVal=null, sizeOfEngineVal=null, licencePlateVal=null, numOfDoorsVal=null, numWheelsVal=null, weightVal=null) {
    MotorVehicle.call(this, velocityVal, colorVal, sizeOfEngineVal, licencePlateVal)
    if(numOfDoorsVal === null || numWheelsVal === null || weightVal === null) {throw new Error("All properties are required!")}
    if(numOfDoorsVal.constructor !== Number || numWheelsVal.constructor !== Number || weightVal.constructor !== Number) {throw new Error("Invalid Values!")}
    Object.defineProperties(this, {
        _numOfDoors: {
            value: numOfDoorsVal,
            enumerable: false,
            configurable: false,
            writable: false
        },
        _numWheels: {
            value: numWheelsVal,
            enumerable: false,
            configurable: false,
            writable: false
        },
        _weight: {
        value: weightVal,
        enumerable: false,
        configurable: false,
        writable: false
        }
    })
}

function DumpTruck(velocityVal=null, colorVal=null, sizeOfEngineVal=null, licencePlateVal=null, loadCapacityVal=null, numWheelsVal=null, weightVal=null) {
    MotorVehicle.call(this, velocityVal, colorVal, sizeOfEngineVal, licencePlateVal)
    if(loadCapacityVal === null || numWheelsVal === null || weightVal === null) {throw new Error("All properties are required!")}
    if(loadCapacityVal.constructor !== Number || numWheelsVal.constructor !== Number || weightVal.constructor !== Number) {throw new Error("Invalid Values!")}
    Object.defineProperties(this, {
        _numWheels: {
            value: numWheelsVal,
            enumerable: false,
            configurable: false,
            writable: false
        },
        _weight: {
            value: weightVal,
            enumerable: false,
            configurable: false,
            writable: false
        },
        _loadCapacity: {
            value: loadCapacityVal,
            enumerable: false,
            configurable: false,
            writable: false
        }
    })
}



// Vehicle Methods
Vehicle.prototype.turnLeft = function() {}
Vehicle.prototype.turnRight = function() {}
Vehicle.prototype.start = function() {}
Vehicle.prototype.stop = function() {}
Vehicle.prototype.goForward = function(accVal=null, timeInterval=null) {
    if(accVal === null || timeInterval === null){throw new Error("Provide all required inputs!")}
    if(timeInterval.constructor !== Number || timeInterval < 0) {throw new Error("Invalid time Interval!")}
    if(accVal.constructor !== Number) {throw new Error("Invalid acc value!")}
    if(!this.vehicleOn) {throw new Error("Brakes are Pushed!")}
    this.velocity = this.velocity + (Math.abs(accVal) * timeInterval);
}
Vehicle.prototype.goBackward = function(accVal=null, timeInterval=null) {
    if(accVal === null || timeInterval === null){throw new Error("Provide all required inputs!")}
    if(timeInterval.constructor !== Number || timeInterval < 0) {throw new Error("Invalid time Interval!")}
    if(accVal.constructor !== Number) {throw new Error("Invalid acc value!")}
    if(!this.vehicleOn) {throw new Error("Brakes are Pushed!")}
    this.velocity = this.velocity - (Math.abs(accVal) * timeInterval);
}
Vehicle.prototype.toString = function() {
    console.log("Vehicle's Velocity: " + this.velocity);
    console.log("Vehicle's Color-Code: " + this.color);
    console.log("Vehicle's State: " + (this.vehicleOn ? "Moving" : "Stopped"))
}
Vehicle.prototype.valueOf = function() {
    return this.velocity;
}

// Bicycle Behavior
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

Bicycle.prototype.ringBell = function() {console.log("Bell Rings!")}
Bicycle.prototype.turnLeft = function() {console.log("Bicycle turned-Left!")}
Bicycle.prototype.turnRight = function() {console.log("Bicycle Turned-Right!")}
Bicycle.prototype.start = function() {if(this.vehicleOn){throw new Error("Bicycle Brakes are released!")} this.vehicleOn = true;}
Bicycle.prototype.stop = function() {if(!this.vehicleOn){throw new Error("Bicycle Brakes are Pushed!")} this.vehicleOn = false;this.velocity = 0;}


// MotorVehicle Behavior
MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;

MotorVehicle.prototype.getSizeOfEngine = function() {console.log(this._sizeOfEngine);}
MotorVehicle.prototype.getLicencePlate = function() {console.log(this._licencePlate);}

// Car Behavior
Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.switchOnAirCond = function() {console.log("Air Conditioner is On!")}
Car.prototype.getNumOfDoors = function() {console.log(this._numOfDoors)}
Car.prototype.turnLeft = function() {console.log("Car turned-Left!")}
Car.prototype.turnRight = function() {console.log("Car Turned-Right!")}
Car.prototype.start = function() {if(this.vehicleOn){throw new Error("Car Brakes are released!")} this.vehicleOn = true;}
Car.prototype.stop = function() {if(!this.vehicleOn){throw new Error("Car Brakes are Pushed!")} this.vehicleOn = false; this.velocity = 0;}

// DumpTruck Behavor 
DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;
DumpTruck.prototype.lowerLoad = function() {console.log("Lowering the load!")}
DumpTruck.prototype.raiseLoad = function() {console.log("Raising Load!")}
DumpTruck.prototype.turnLeft = function() {console.log("DumpTruck turned-Left!")}
DumpTruck.prototype.turnRight = function() {console.log("DumpTruck Turned-Right!")}
DumpTruck.prototype.start = function() {if(this.vehicleOn){throw new Error("DumpTruck Brakes are released!")} this.vehicleOn = true;}
DumpTruck.prototype.stop = function() {if(!this.vehicleOn){throw new Error("DumpTruck Brakes are Pushed!")} this.vehicleOn = false;this.velocity = 0;}