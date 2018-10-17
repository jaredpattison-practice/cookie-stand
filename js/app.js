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
//var totalDailyCookies = [];

var random = function(max, min) {
	return Math.floor(Math.random() * (max - min) + min);
}

function Store(
  minCustomersPerHour,
  maxCustomersPerHour,
  avgCookiesPerCustomer,
  locationName,
  Id
) {
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.locationName = locationName;
  this.Id = Id;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
}

Store.prototype.calcCustomersEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var randomCustomers = random(this.maxCustomersPerHour, this.minCustomersPerHour);
    this.customersEachHour.push(randomCustomers);
  }
};

Store.prototype.calcCookiesEachHour = function() {
  this.calcCustomersEachHour();

  for (var i = 0; i < hours.length; i++) {
    var hourlyCookies = Math.ceil(
      this.customersEachHour[i] * this.avgCookiesPerCustomer
    );
    this.cookiesEachHour.push(hourlyCookies);
  }
};



Store.prototype.render = function() {
  this.calcCookiesEachHour();
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }
  salesTable.appendChild(trEl);
  //console.table(this.cookiesEachHour);
};

/* function newElement(type, content, parent) {
	var element = document.createElement(type);
	element.textContent = content;
	parent.appendChild(element)
} */

var makeHeaderRow = function() {
  // newElement('th', '', 'tr')
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    var trEl;
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  salesTable.appendChild(trEl);
};

/* var makeFooterRow = function() {
	var trEl = document.createElement('tr');
	var thEl = document.createElement('th');
	thEl.textContent = '';
	trEl.appendChild(thEl);

	for(var i = 0; i < hours.length; i++) {
		thEl = document.createElement('th');
		thEl.textContent = totalDailyCookies[i];
		trEl.appendChild(thEl);
	}
	salesTable.appendChild(trEl);
	console.log(totalDailyCookies)
} */

var pike = new Store(23, 65, 6.3, '1st and Pike', 'pikestore');
var seatac = new Store(3, 24, 1.2, 'SeaTac Airport', 'seatacstore');
var seattle = new Store(11, 38, 3.7, 'Seattle Center', 'seattlestore');
var capitol = new Store(20, 38, 2.3, 'Capitol Hill', 'capitolstore');
var alki = new Store(2, 16, 4.6, 'Alki', 'alkistore');

makeHeaderRow();
pike.render();
seatac.render();
seattle.render();
capitol.render();
alki.render();
//makeFooterRow();
