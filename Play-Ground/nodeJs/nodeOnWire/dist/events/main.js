"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("./event");
const user = new event_1.UserEvent('Mohamed Khaled');
user.on('userCreated', (name) => {
    // do some logic 
    console.log(name);
});
user.createsUser();
