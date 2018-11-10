'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var salesTable = document.getElementById('sales');
var updateForm = document.getElementById('update-form');
var allStores = [];

function Store (
  minCustomersPerHour,
  maxCustomersPerHour,
  avgCookiesPerCustomer,
  locationName
){
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.locationName = locationName;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  allStores.push(this);
  this.calcCustomersEachHour();
  this.calcCookiesEachHour();
}

Store.prototype.calcCustomersEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var randomCustomers = random(this.maxCustomersPerHour, this.minCustomersPerHour);
    this.customersEachHour.push(randomCustomers);
  }
};

Store.prototype.calcCookiesEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookies = Math.ceil(
      this.customersEachHour[i] * this.avgCookiesPerCustomer
    );
    this.cookiesEachHour.push(hourlyCookies);
  }
};

new Store(23, 65, 6.3, '1st and Pike');
new Store(3, 24, 1.2, 'SeaTac Airport');
new Store(11, 38, 3.7, 'Seattle Center');
new Store(20, 38, 2.3, 'Capitol Hill');
new Store(2, 16, 4.6, 'Alki');

function random(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Iterates through hours summing cookies sold at store[i]
function calcTotalDailyCookies(i) {
  var tally = 0;
  for(var j = 0; j < hours.length; j++) {
    tally += allStores[i].cookiesEachHour[j];
  }
  return tally;
}

// Iterates through stores summing cookies sold during hour[i]
function calcTotalHourlyCookies(i) {
  var tally = 0;
  for(var j = 0; j < allStores.length; j++) {
    tally += allStores[j].cookiesEachHour[i];
  }
  return tally;
}

// Iterates through stores and hours summing all cookies sold that day
function calcTotalDailyCookiesAll() {
  var tally = 0;
  for(var i = 0; i < hours.length; i++) {
    for(var j = 0; j < allStores.length; j++) {
      tally += allStores[j].cookiesEachHour[i];
    }
  }
  return tally;
}

// Creates table element
function makeNewElement(type, content, parent) {
  var element = document.createElement(type);
  element.textContent = content;
  parent.appendChild(element)
}

function render() {
  // Header
  var trEl = document.createElement('tr');
  makeNewElement('th', 'Location', trEl);
  for (var i = 0; i < hours.length; i++) {
    makeNewElement('th', hours[i], trEl);
  }
  makeNewElement('th', 'Total', trEl);
  salesTable.appendChild(trEl);
  // Table
  for(i = 0; i < allStores.length; i++) {
    trEl = document.createElement('tr');
    makeNewElement('td', allStores[i].locationName, trEl);
    for (var j = 0; j < hours.length; j++) {
      makeNewElement('td', allStores[i].cookiesEachHour[j], trEl);
    }
    makeNewElement('td', calcTotalDailyCookies(i), trEl);
    salesTable.appendChild(trEl);
  }
  // Footer
  trEl = document.createElement('tr');
  makeNewElement('th', 'Total', trEl);

  for(i = 0; i < hours.length; i++) {
    makeNewElement('th', calcTotalHourlyCookies(i), trEl);
  }
  makeNewElement('th', calcTotalDailyCookiesAll(), trEl);
  salesTable.appendChild(trEl);
}

function handleUpdateSubmit(event) {
  event.preventDefault();
  var location = event.target.location.value;
  var min = Number(event.target.minCustomer.value);
  var max = Number(event.target.maxCustomer.value);
  var avg = Number(event.target.avgCookiesCustomer.value);
  console.log(location);
  
  if(isNaN(avg)) {
    return alert('Please enter a number');
  } else {
    new Store(min, max, avg, location);
    document.getElementById('sales').innerHTML='';
    render();
  }
}

updateForm.addEventListener('submit', handleUpdateSubmit);

render();
