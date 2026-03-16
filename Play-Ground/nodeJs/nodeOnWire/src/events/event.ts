import EventEmitter from "node:events";

export class UserEvent extends EventEmitter {
    constructor(public name: string){
        super();
        this.name = name;
    }
    createsUser() {
        // do some logic for creating User
        this.emit('userCreated', this.name);
    }
}