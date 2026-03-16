"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEvent = void 0;
const node_events_1 = __importDefault(require("node:events"));
class UserEvent extends node_events_1.default {
    constructor(name) {
        super();
        this.name = name;
        this.name = name;
    }
    createsUser() {
        // do some logic for creating User
        this.emit('userCreated', this.name);
    }
}
exports.UserEvent = UserEvent;
