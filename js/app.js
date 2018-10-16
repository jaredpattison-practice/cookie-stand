'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var pike = {
  location: '1st and Pike',
	minCustomer: 23,
	maxCustomer: 65,
	avgCookiesPerSale: 6.3,
	cookiesEachHour: [],
	totalDailyCookies: 0
};

pike.calcCookiesEachHour = function () {
	for (var i = 0; i < hours.length; i++) {
		var hourlyTotals = Math.ceil((getRandomIntInclusive(this.minCustomer, this.maxCustomer)) * (this.avgCookiesPerSale));
		this.totalDailyCookies += hourlyTotals;
		this.cookiesEachHour.push(hourlyTotals)
	}
}


pike.render = function() {
	this.calcCookiesEachHour();
	var pikeUl = document.getElementById('pikestore');
	for (var i = 0; i < hours.length; i++){
		var liEl = document.createElement('li');
		liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
		pikeUl.appendChild(liEl);
	}
	liEl = document.createElement('li');
	liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
	pikeUl.appendChild(liEl);
}

var seatac = {
  location: 'SeaTac Airport',
	minCustomer: 23,
	maxCustomer: 65,
	avgCookiesPerSale: 6.3,
	cookiesEachHour: [],
	totalDailyCookies: 0
};

seatac.calcCookiesEachHour = function () {
	for (var i = 0; i < hours.length; i++) {
		var hourlyTotals = Math.ceil((getRandomIntInclusive(this.minCustomer, this.maxCustomer)) * (this.avgCookiesPerSale));
		this.totalDailyCookies += hourlyTotals;
		this.cookiesEachHour.push(hourlyTotals)
	}
}


seatac.render = function() {
	this.calcCookiesEachHour();
	var pikeUl = document.getElementById('seatacstore');
	for (var i = 0; i < hours.length; i++){
		var liEl = document.createElement('li');
		liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
		pikeUl.appendChild(liEl);
	}
	liEl = document.createElement('li');
	liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
	pikeUl.appendChild(liEl);
}

var seattle = {
  location: 'Seattle Center',
	minCustomer: 23,
	maxCustomer: 65,
	avgCookiesPerSale: 6.3,
	cookiesEachHour: [],
	totalDailyCookies: 0
};

seattle.calcCookiesEachHour = function () {
	for (var i = 0; i < hours.length; i++) {
		var hourlyTotals = Math.ceil((getRandomIntInclusive(this.minCustomer, this.maxCustomer)) * (this.avgCookiesPerSale));
		this.totalDailyCookies += hourlyTotals;
		this.cookiesEachHour.push(hourlyTotals)
	}
}


seattle.render = function() {
	this.calcCookiesEachHour();
	var pikeUl = document.getElementById('seattlestore');
	for (var i = 0; i < hours.length; i++){
		var liEl = document.createElement('li');
		liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
		pikeUl.appendChild(liEl);
	}
	liEl = document.createElement('li');
	liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
	pikeUl.appendChild(liEl);
}

var capitol = {
  location: 'Capitol Hill',
	minCustomer: 23,
	maxCustomer: 65,
	avgCookiesPerSale: 6.3,
	cookiesEachHour: [],
	totalDailyCookies: 0
};

capitol.calcCookiesEachHour = function () {
	for (var i = 0; i < hours.length; i++) {
		var hourlyTotals = Math.ceil((getRandomIntInclusive(this.minCustomer, this.maxCustomer)) * (this.avgCookiesPerSale));
		this.totalDailyCookies += hourlyTotals;
		this.cookiesEachHour.push(hourlyTotals)
	}
}


capitol.render = function() {
	this.calcCookiesEachHour();
	var pikeUl = document.getElementById('capitolstore');
	for (var i = 0; i < hours.length; i++){
		var liEl = document.createElement('li');
		liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
		pikeUl.appendChild(liEl);
	}
	liEl = document.createElement('li');
	liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
	pikeUl.appendChild(liEl);
}

var alki = {
  location: 'Alki',
	minCustomer: 23,
	maxCustomer: 65,
	avgCookiesPerSale: 6.3,
	cookiesEachHour: [],
	totalDailyCookies: 0
};

alki.calcCookiesEachHour = function () {
	for (var i = 0; i < hours.length; i++) {
		var hourlyTotals = Math.ceil((getRandomIntInclusive(this.minCustomer, this.maxCustomer)) * (this.avgCookiesPerSale));
		this.totalDailyCookies += hourlyTotals;
		this.cookiesEachHour.push(hourlyTotals)
	}
}

alki.render = function() {
	this.calcCookiesEachHour();
	var pikeUl = document.getElementById('alkistore');
	for (var i = 0; i < hours.length; i++){
		var liEl = document.createElement('li');
		liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
		pikeUl.appendChild(liEl);
	}
	liEl = document.createElement('li');
	liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
	pikeUl.appendChild(liEl);
}

pike.render();
seatac.render();
seattle.render();
capitol.render();
alki.render();

