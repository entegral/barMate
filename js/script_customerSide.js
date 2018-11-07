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
  this.totalCost += drink.drinkPrice;
  this.drinks.push(drink);
  this.updateTab();
}

Order.prototype.removeDrink = function(name) {
  for (var i =0; i < this.drinks.length; i++) {
    if (this.drinks[i]) {
      if(this.drinks[i].drinkName === name) {
        this.totalCost -= this.drinks[i].drinkPrice
        delete this.drinks[i];
        this.updateTab();
        return true;
      }
    }
  };
  return false;
}

Order.prototype.clone = function (){
  var newOrder = new Order();
  newOrder.firstName = this.firstName;
  newOrder.lastName = this.lastName;
  newOrder.dateOfBirth = this.dateOfBirth;
  newOrder.phoneNumber = this.phoneNumber;
  newOrder.drinks = newOrder.drinks.concat(this.drinks);
  newOrder.totalCost = this.totalCost;
  return newOrder;
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
    }
  }
}

function addSwitchListener() {
  $(".video-wrapper").on("click", function() {
    $("#customerSide").toggle();
    $("#companySide").toggle();
  });
};

function addTabRemoveListener () {
  $("#currentTab").on("click", ".removeDrink", function() {
    var drinkName = (this.classList)[0];
    customerOrder.removeDrink(drinkName);
  })
}

Order.prototype.clearOrder = function() {
  this.firstName = "",
  this.lastName = "",
  this.dateOfBirth = "",
  this.phoneNumber = "",
  this.drinks = [],
  this.totalCost = 0
  this.clearCurrentTab();
}

Order.prototype.clearCurrentTab = function () {
  $("#currentTab").html("");
};

Order.prototype.updateTab = function () {
  var output = "<ul>"
  this.drinks.forEach(function(drink){
    output += "<li class='tabLineItem'>" + drink.drinkName + "<br>"
    output += "<button type='button' class='" + drink.drinkName + " removeDrink btn center btn-sm btn-danger'>Remove From Tab</button></li>"
  })
  output += "</ul>"
  output += "<p>Your total is: $" + this.totalCost + "</p>";
  $("#currentTab").html(output);
};

function resetBoxes() {
  $(".form-check-input").prop("checked", false);
  var expandedCards = document.getElementsByClassName("overlayColor");
  var paragraph = $(expandedCards).find("p");
  paragraph.slideUp();
  $(expandedCards).removeClass("overlayColor");
};

function resetNameField() {
  $("#first-name").val("");
  $("#last-name").val("");
  $("#phone-number").val("");
  $("#date-of-birth").val("");
};

var customerOrder = new Order()

$(document).ready(function() {
  $("#customer").click(function(){
    $("#customerSide").show();
    $("#selection").hide();
    $("#startOrder").show();
    addSwitchListener();
  });
  addTabRemoveListener();
  $("form#form1").submit(function(event){
    event.preventDefault ();
    interpretDrinks();
    if(customerOrder.firstName === "" || customerOrder.lastName === "") {
      customerOrder.updateInfo();
    }
    resetBoxes();
  });

// Add Ready to Order Button
  $("#startOrder").click(function(){
    $("#userInfo").toggle();
    $("#orderButtons").show();
    $("#startOrder").hide();
  })

  $("#addOrder").click(function(){
    $("#userInfo").hide();
    $("#tab").show();
  })

  $("#submitOrderButton").click(function() {
    ticketManager.addTicket(customerOrder.clone());
    customerOrder.clearOrder();
    resetNameField();
  });
  $(".drinkCard").on("click", function(e){
    e.stopPropagation();
    var checkbox = $(this).find('input[type="checkbox"]');
    checkbox.prop('checked', !checkbox.prop('checked'));
    $(this).toggleClass("overlayColor")
    $(this).find("p").slideToggle();
  });
});
