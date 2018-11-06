# _barMate_

#### By _**Robert Bruce, Rohan Moore, Ngan Nguyen, Chris Rudnicky**_

## Description

_An app to help people place orders and help businesses maintain an efficient workflow._

## Setup/Installation Requirements

* _Log in to GitHub_
* _Clone GitHub URL in terminal_
* _Open the html file in your Web Browser_
* _Open file in Atom_

## Specifications

- [x] create drink object with name and price
````
Input: new Drink("Beer", 7)
Expected Output: [object Drink]
````

- [x] create order/ticket/tab
````
Input: new Order(name, age, phone number)
Expected Output: order = {name, age, phone number, price, drinkArray}
````

- [x] add drinks to order
````
Input: order.addDrink(new Drink)
Expected Output: Order.drinkArray = [Drink]
````

- [x] remove drinks from order
````
Input: order.removeDrink(name)
Expected Output: order.drinkArray = []
````

- [x] calculate order total
````
Input: order.totalCost
Expected Output: "$5"
````

- [x] Add order to ticketList
````
Input: ticketList.addOrder(order)
Expected Output: ticketList.tickets = [order]
````

- [x] Remove order from ticketList
````
Input: ticketList.addOrder(order)
Expected Output: ticketList.tickets = []
````

- [x] Signal when order is ready
````
Input: ticketlist.readyTicket(order)
Expected Output: readyList.tickets = [order]
````

- [x] Create TicketManager object to handle interacting with pending and ready orders
````
Input: var ticketManager = new TicketManager()
Expected Output: ticketManager = {TicketList, TicketList}
````

- [x] Add functions to modify pending tickets in accordance with previous specs
````
Input: ticketlist.readyTicket(order), ticketList.addOrder(order), ticketList.addOrder(order)
Expected Output: readyList.tickets = [order], ticketList.tickets = [order], ticketList.tickets = []
````

- [x] Write ticket contents to HTML upon changes
````
Input: ticketManager.writeTicketList()
Expected Output: lists of pending and ready orders in the HTML
````

## Technologies Used
_GitHub, HTML, CSS, Bootstrap, Javascript, JQuery_

### License
Copyright (c) 2018 **_RB RM NN CR_** GNU General Public License 3.0
