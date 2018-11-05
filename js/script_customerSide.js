
function Drink (name, price) {
  this.drinkName = name,
  this.drinkPrice = price
}


Drink.prototype.newOrderCost = function () {
  var input = document.getElementsByName()
  cost = 0
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      cost += parseFloat(input[i].value)
    }
  }
  return cost
}



function Order (customerName, customerDateOfBirth) {
  this.name = customerName,
  this.dob = customerDateOfBirth,
  this.drinks = [],
  this.totalCost = 0
}

Order.prototype.addDrink = function (drink) {
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
  for (var i =0; i <this.drinks.length; i++) {
    if this.drinks[i]) {
      if(this.drinks[i].name = name) {
        delete this.drinks[i];
        return true;
      }
    }
  };
  return false;
}

var newOrder = new Order ('Chris', 'June 11')
var newDrink = new Drink('water', 1)
// var newDrinkTwo = new Drink('beer', 2)
newOrder.addDrink(newDrink)
// newOrder.addDrink(newDrinkTwo)
console.log(newOrder.newOrderCost());
newOrder.newOrderCost();

// var drinkName = ["beer","wine","soda"]
// var drinkCost = [1 ,2, 3]
