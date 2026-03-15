export default class FlightTicket {
  #seatNum;#flightNum;
  #depAirport;#arrivAirport;
  #travellingDate;

  constructor(seatNum, flightNum, depAirport, arrivAirport, travellingDate=new Date()) {
    this.seatNum = seatNum;
    this.flightNum = flightNum;
    this.depAirport = depAirport;
    this.arrivAirport = arrivAirport;
    this.travellingDate = travellingDate;
  }

  set seatNum(value) {
    if(!value){
        throw new Error("SeatNum Is Required!")
    }
    if(typeof value !== 'string'){
        throw new Error("Type Error!")
    }
    this.#seatNum = value;
  }

  get seatNum() {
    return this.#seatNum;
  }


  set flightNum(value) {
    if(!value){
        throw new Error("FlightNum Is Required!")
    }
    if(typeof value !== 'string'){
        throw new Error("Type Error!")
    }
    this.#flightNum = value;
  }

  get flightNum() {
    return this.#flightNum;
  }


  set depAirport(value) {
    if(!value){
        throw new Error("depAirport Is Required!")
    }
    if(typeof value !== 'string'){
        throw new Error("Type Error!")
    }
    this.#depAirport = value;
  }

  get depAirport() {
    return this.#depAirport;
  }

  set arrivAirport(value) {
    if(!value){
        throw new Error("arrivAirport Is Required!")
    }
    if(typeof value !== 'string'){
        throw new Error("Type Error!")
    }
    this.#arrivAirport = value;
  }

  get arrivAirport() {
    return this.#arrivAirport;
  }

  set travellingDate(value) {
    if(!(value instanceof Date)){
        throw new Error("Type Error!")
    }
    this.#travellingDate = value.toDateString();
  }

  get travellingDate() {
    return this.#travellingDate;
  }

  displayTicket() {
    console.log('\nFlight Ticket Info:\n-------------------');
    console.log(`Seat Number: ${this.#seatNum}`);
    console.log(`Flight Number: ${this.#flightNum}`);
    console.log(`Departure Airport: ${this.#depAirport}`);
    console.log(`Arrival Airport: ${this.#arrivAirport}`);
    console.log(`Travelling Date: ${this.#travellingDate}\n`);
  }
}