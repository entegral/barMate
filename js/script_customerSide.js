
function Drink (name, price) {
  this.drinkName = name,
  this.drinkPrice = price
}



function Order () {
  this.firstName = "",
  this.lastName = "",
  this.dateOfBirth = "",
  this.phoneNumber = "",
  this.drinks = [],
  this.totalCost = 0
}

Order.prototype.addDrink = function (drink) {
  console.log("add drink" + drink.drinkPrice);
  this.totalCost += drink.drinkPrice;
  this.drinks.push(drink);
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



Order.prototype.updateInfo = function () {
  this.firstName = $("#first-name").val();
  this.lastName = $("#last-name").val();
  this.dateOfBirth= $("#date-of-birth").val();
  this.phoneNumber = $("#phone-number").val();
}


function interpretDrinks() {
  var input = $('input[name="beers"]:checked');
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      customerOrder.addDrink(new Drink(input[i].dataset.value2, parseFloat(input[i].value)))
      console.log(input[i].value);
    }
  }
}


var customerOrder = new Order()

$(document).ready(function() {
  $("#customer").click(function(){
    $("#customerSide").show();
    $("#selection").hide();
  });

  $("form#form1").submit(function(event){
    event.preventDefault ();
    interpretDrinks();
    customerOrder.updateInfo();
    console.log(customerOrder);
  })
});
