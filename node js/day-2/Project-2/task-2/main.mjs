import FlightTicket from "./script.mjs";

const flightTicket = new FlightTicket("2MK", "12", 'CAIRO', 'ISTANBUL');
flightTicket.displayTicket();

flightTicket.travellingDate = new Date("2026-04-01");
flightTicket.displayTicket();