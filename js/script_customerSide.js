function TicketList() {
  this.tickets = [];

};

TicketList.prototype.addTicket = function(ticket) {
  console.log(ticket);
  this.tickets.push(ticket);
  console.log(this.tickets);
};

TicketList.prototype.removeTicket = function(index){
  // this method should take parameter of "index" that allows removing a ticket at index
};

TicketList.prototype.ticketReady = function (index) {
  // this method should take an index, notify user that drink is ready, and then remove it from the list

  var ticket = this.tickets[index];
  this.removeTicket(index);
  console.log(ticket);
};

TicketList.prototype.modifyTicket = function (newTicket, oldTicket) {
  var ticketToModify = this.tickets[(this.tickets).indexOf(oldTicket)]
  ticketToModify.

};


// function Ticket(customerName) {
//   this.customerName = customerName;
//   this.creditCard = "";
//   this.drinkAddress = "";
//   this.drinks = [];
//   this.price = 0;
// };
//
// Ticket.prototype.addDrink = function (drink) {
//   this.drinks.push(drink);
//   this.price += drink.price;
// };
//
//
// function Drink(name, price) {
//   this.name = name;
//   this.price = price;
// }




// UI Logic ------------ UI Logic ------------ UI Logic ------------ UI Logic

function GenerateCompanyPage() {

};

GenerateCompanyPage.prototype.generatePage = function() {
  $("#companySide").show();
};

$(function() {

});
