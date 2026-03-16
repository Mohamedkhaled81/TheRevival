import { UserEvent } from './event';

const user = new UserEvent('Mohamed Khaled');

user.on('userCreated', (name) => {
    // do some logic 
    console.log(name);
})

user.createsUser();