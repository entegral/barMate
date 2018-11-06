
function Drink (name, price) {
  this.drinkName = name,
  this.drinkPrice = price
}



function Order (firstName, lastName, dateOfBirth, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.dateOfBirth = dateOfBirth,
  this.phoneNumber = phoneNumber,
  this.drinks = [],
  this.totalCost = 0
}

Order.prototype.addDrink = function (drink) {
  this.totalCost += drink.price;
  this.drinks.push(drink);
}

Order.prototype.totalCost = function() {
  var totalCost = 0;
  this.drinks.forEach(function(drink) {
    totalCost += drink.cost;
  });
  this.totalCost = totalCost;
}

Order.prototype.removeDrink = function(name) {
  for (var i =0; i < this.drinks.length; i++) {
    if (this.drinks[i]) {
      if(this.drinks[i].drinkName === name) {
        this.totalCost -= this.drinks[i].drinkPrice
        delete this.drinks[i];
        return true;
      }
    }
  };
  return false;
}


function newOrder() {
  var inputtedFirstName = $("#first-name").val();
  var inputtedLastName = $("#last-name").val();
  var inputtedDob = $("#date-of-birth").val();
  var inputtedPhoneNumber = $("#phone-number").val();
  var newCustomer = new Order(inputtedFirstName, inputtedLastName, inputtedDob, inputtedPhoneNumber)
  return newCustomer;
}

function interpretDrinks(name, customerOrder){
  var drinkOption = document.getElementsByName(name)
  drinkOption.forEach(function(each){
    customerOrder.drinks.push(newDrink(each))
  })

}

function newDrink(drinkOption) {

  var drinkName = drinkOption.getAttribute("name")
  var drinkPrice = drinkOption.getAttribute("price")
  var drink = new Drink (drinkName, drinkPrice)
  return drink
}

$(document).ready(function() {
  $("#customer").click(function(){
    $("#customerUi").show();
    $("#selection").hide();
  });

  $("form#form1").submit(function(event){
    event.preventDefault ();
    var customerOrder = newOrder()
    interpretDrinks("beers", customerOrder)


    console.log(customerOrder);
    console.log(customerDrink);
  })
})
