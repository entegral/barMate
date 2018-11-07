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
      if((this.drinks[i].drinkName).split(" ")[0] === name) {
        this.totalCost -= this.drinks[i].drinkPrice;
        (this.drinks).splice((this.drinks).indexOf(this.drinks[i]), 1);
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
    $("#startOrder").toggle();
  });
};

function addTabRemoveListener () {
  $("#currentTab").on("click", ".removeDrink", function() {
    var drinkName = (this.classList)[0];
    customerOrder.removeDrink(drinkName);
  })
}

function updateCustomerInfoOnKeypress() {
  $("#userInfo").find("input").keyup(function(){
    customerOrder.firstName = $("#first-name").val();
    customerOrder.lastName = $("#last-name").val();
    customerOrder.phoneNumber = $("#phone-number").val();
    customerOrder.dateOfBirth = $("#date-of-birth").val();
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
    output += "<li class='tabLineItem'>" + drink.drinkName
    output += "<button type='button' class='" + (drink.drinkName).split(" ")[0] + " removeDrink btn center btn-sm btn-danger'>    -    </button></li>"
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
    $("#sidenav").show();
    addSwitchListener();
  });

  updateCustomerInfoOnKeypress();
  addTabRemoveListener();


// Add Ready to Order Button
  $("#startOrder").click(function(){
    if (customerOrder.firstName && customerOrder.lastName){
      $("#tab").show();
      $("#orderButtons").show();
      $("#startOrder").hide();
    }else {
      $("#userInfo").toggle();
      $("#orderButtons").show();
      $("#startOrder").hide();
    }
  });


  $("#addOrder").click(function(){
    $("#userInfo").hide();
    $("#tab").show();
    interpretDrinks();
    resetBoxes();
  });

  $(".close").click(function(){
    $("#userInfo").hide();
    $("#orderButtons").hide();
    $("#tab").hide();
    $("#startOrder").show();

  })

  $("#submitOrderButton").click(function() {
    customerOrder.updateInfo();
    ticketManager.addTicket(customerOrder.clone());
    customerOrder.clearOrder();
    resetNameField();
    $("#tab").hide();
    $("#orderButtons").hide();
    $("#startOrder").show();
  });


  $(".drinkCard").on("click", function(e){
    e.stopPropagation();
    var checkbox = $(this).find('input[type="checkbox"]');
    checkbox.prop('checked', !checkbox.prop('checked'));
    $(this).toggleClass("overlayColor")
    $(this).find("p").slideToggle();
  });

});
