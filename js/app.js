'use strict';

var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm'
];

var salesTable = document.getElementById('sales');
var updateForm = document.getElementById('update-form');
var allStores = [];
var random = function(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

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

var calcTotalDailyCookies = function(i) {
  var tally = 0;
  for(var j = 0; j < hours.length; j++) {
    tally += allStores[i].cookiesEachHour[j];
  }
  return tally;
}

var calcTotalHourlyCookies = function(i) {
  var tally = 0;
  for(var j = 0; j < allStores.length; j++) {
    tally += allStores[j].cookiesEachHour[i];
  }
  return tally;
}

var calcTotalDailyCookiesAll = function() {
  var tally = 0;
  for(var i = 0; i < hours.length; i++) {
    for(var j = 0; j < allStores.length; j++) {
      tally += allStores[j].cookiesEachHour[i];
    }
  }
  return tally;
}

var render = function() {
  // Header
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total'
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);
  // Table
  for(i = 0; i < allStores.length; i++) {
    trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allStores[i].locationName;
    trEl.appendChild(tdEl);
    
    for (var j = 0; j < hours.length; j++) {
      tdEl = document.createElement('td');
      tdEl.textContent = allStores[i].cookiesEachHour[j];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = calcTotalDailyCookies(i);
    trEl.appendChild(tdEl);
    salesTable.appendChild(trEl);
  }
  // Footer
	var trEl = document.createElement('tr');
	var thEl = document.createElement('th');
	thEl.textContent = 'Total';
	trEl.appendChild(thEl);

	for(i = 0; i < hours.length; i++) {
		thEl = document.createElement('th');
		thEl.textContent = calcTotalHourlyCookies(i);
		trEl.appendChild(thEl);
  }
 	var thEl = document.createElement('th');
	thEl.textContent = calcTotalDailyCookiesAll();
	trEl.appendChild(thEl);
	salesTable.appendChild(trEl);
};

function newElement(type, content, parent) {
	var element = document.createElement(type);
	element.textContent = content;
	parent.appendChild(element)
}


function handleUpdateSubmit(event) {
  event.preventDefault();
  // console.log('log of the event object', event);
  // console.log('log of the event.target', event.target);
  // console.log('log of the event.target.minCustomer', event.target.minCustomer);
  // console.log(event.target.avgCookiesCustomer.value);
  var location = event.target.location.value;
  var min = Number(event.target.minCustomer.value);
  var max = Number(event.target.maxCustomer.value);
  var avg = Number(event.target.avgCookiesCustomer.value);
  // var Id = (event.target.location.value).toLowerCase().replace(/\s+/g, '');
  new Store(min, max, avg, location);
  // console.log(allStores);
  // allStores[allStores.length -1].render();
  document.getElementById('sales').innerHTML='';
  render();
}

updateForm.addEventListener('submit', handleUpdateSubmit);

console.log(allStores[0].cookiesEachHour[0]);
console.log(allStores[0].locationName);
render();
