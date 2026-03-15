import { EventEmitter } from 'node:events';

export const myEvent = new EventEmitter();

myEvent.on('sayMyName', () => {
    console.log('Mohamed Khaled :D');
})

myEvent.emit("sayMyName");
myEvent.emit("sayMyName");
myEvent.emit("sayMyName");