function TicketList() {
  this.tickets = [];

};

TicketList.prototype.addTicket = function(ticket) {
  // console.log(ticket);
  this.tickets.push(ticket);
  // console.log(this.tickets);
};

TicketList.prototype.removeTicket = function(ticket) {
  // this method should take parameter of "index" that allows removing a ticket at index
  return (this.tickets).splice((this.tickets).indexOf(ticket), 1)[0];
};

TicketList.prototype.ticketReady = function (ticket) {
  // this method should take an index, notify user that drink is ready, and then remove it from the list
  var removedTicket = this.removeTicket(ticket);
// eventually push this ticket to an array of "ready drinks"
  console.log(removedTicket);
};

TicketList.prototype.modifyTicket = function (newTicket, oldTicket) {
  var ticketToModify = this.tickets[(this.tickets).indexOf(oldTicket)]
  ticketToModify = newTicket;
};

TicketList.prototype.getTicketNumber = function() {
  return (this.tickets).length;
};

TicketList.prototype.getTicket = function(index) {
  return this.tickets[index];
};




function Ticket(customerName) {
  this.name = customerName;
  this.creditCard = "";
  this.drinkAddress = "";
  this.drinks = [];
  this.price = 0;
};

Ticket.prototype.addDrink = function (drink) {
  this.drinks.push(drink);
  this.drinkPrice += drink.drinkPrice;
};


function Drink(name, price) {
  this.drinkName = name;
  this.drinkPrice = price;
};




// Private UI Logic ------------ Private UI Logic ------------ Private UI Logic ------------ Private UI Logic

function CompanyPage(ticketManager) {
  this.ticketManager = ticketManager;
};

CompanyPage.prototype.displayPage = function() {
  $("#companySide").show();
};

CompanyPage.prototype.ticketReadyClickListeners = function() {
  $("#ticketList").on("click", "button", function() {
    var ticketIndex = parseInt((this.id).slice(6,7));
    console.log(ticketIndex);
    ticketManager.readyTicket((ticketManager.tickets).getTicket(ticketIndex));
  })
};


// Public UI Logic ------------ Public UI Logic ------------ Public UI Logic ------------ Public UI Logic

function TicketManager() {
  this.tickets = new TicketList();
};

//These functions are called by the customer side logic
TicketManager.prototype.addTicket = function(ticket) {
  (this.tickets).addTicket(ticket);
  this.writeTicketList();
};

TicketManager.prototype.removeTicket = function(ticket) {
  (this.tickets).removeTicket(ticket);
  this.writeTicketList();
};

TicketManager.prototype.modifyTicket = function(newTicket, oldTicket) {
  (this.tickets).modifyTicket(newTicket, oldTicket);
  this.writeTicketList();
};

//These functions are only called internally or by company side logic
TicketManager.prototype.readyTicket = function(ticket) {
  (this.tickets).ticketReady(ticket);
  this.writeTicketList();
};

TicketManager.prototype.clearTicketList = function() {
  $("#ticketList").html("");
};

TicketManager.prototype.writeTicketList = function() {
  this.clearTicketList();
  for(var i = 0; i < (this.tickets).getTicketNumber(); i++) {
    var ticket = (this.tickets).getTicket(i);
    var ticketDetails = "";
    ticketDetails += "<li>Order for " + ticket.name + "<button type='button' id='ticket" + i + "Button'>Order Ready</button><ul>";
    for(var j = 0; j < (ticket.drinks).length; j++) {
      var drink = (ticket.drinks)[j];
      ticketDetails += "<li>Drink: " + drink.drinkName + " Price: $" + drink.drinkPrice + "</li>";
    }
    ticketDetails += "</ul></li>"
    $("#ticketList").append(ticketDetails);
  }
};

//This is the document ready section

var ticketManager = new TicketManager()
var companyPage = new CompanyPage(ticketManager);

$(function() {

  var steve = new Ticket("steve");
  steve.addDrink(new Drink("beer", 4));
  var dan = new Ticket("dan");
  dan.addDrink(new Drink("beer", 4));
  dan.addDrink(new Drink("cocktail", 7));
  var joe = new Ticket("joe");
  joe.addDrink(new Drink("cocktail", 6));
  var billy = new Ticket("billy");
  billy.addDrink(new Drink("whiskey", 6));
  var tom = new Ticket("tom");
  tom.addDrink(new Drink("beer", 4));

// fake tickets for testing
  ticketManager.addTicket(steve);
  ticketManager.addTicket(dan);
  ticketManager.addTicket(joe);
  ticketManager.addTicket(billy);
  ticketManager.addTicket(tom);
  // ticketManager.writeTicketList();


  companyPage.ticketReadyClickListeners();
});
