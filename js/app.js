'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
	hourlyTotals: function() {
		var newArray = [];
		for(var i=0; i < hours.length; i++){
			newArray.push(Math.round((getRandomIntInclusive(this.minCustomer, this.maxCustomer) )*(this.avgCookiesPerSale)))
		}
		return newArray;
	}
};

pike.render = function() {
	var pikeUl = document.getElementById('pikestore');
	for (var i = 0; i < hours.length; i++){
		var liEl = document.createElement('li');
		liEl.textContent = `${hours[i]}: ${this.hourlyTotals()[i]} cookies`
		pikeUl.appendChild(liEl);
	}
}

var seatac = {
  location: 'SeaTac Airport',
	minCustomer: 3,
	maxCustomer: 24,
	avgCookiesPerSale: 1.2,
	hourlyTotals: function() {
		var newArray = [];
		for(var i=0; i < hours.length; i++){
			newArray.push(Math.round((getRandomIntInclusive(this.minCustomer, this.maxCustomer) )*(this.avgCookiesPerSale)))
		}
		return newArray;
	}
};

seatac.render = function() {
	var seatacUl = document.getElementById('seatacstore');
	for (var i = 0; i < hours.length; i++){
		var liEl = document.createElement('li');
		liEl.textContent = `${hours[i]}: ${this.hourlyTotals()[i]} cookies`
		seatacUl.appendChild(liEl);
	}
}

var seattle = {
  location: 'Seattle Center',
	minCustomer: 11,
	maxCustomer: 38,
	avgCookiesPerSale: 3.7,
	hourlyTotals: function() {
		var newArray = [];
		for(var i=0; i < hours.length; i++){
			newArray.push(Math.round((getRandomIntInclusive(this.minCustomer, this.maxCustomer) )*(this.avgCookiesPerSale)))
		}
		return newArray;
	}
};

seattle.render = function() {
	var seattleUl = document.getElementById('seattlestore');
	for (var i = 0; i < hours.length; i++){
		var liEl = document.createElement('li');
		liEl.textContent = `${hours[i]}: ${this.hourlyTotals()[i]} cookies`
		seattleUl.appendChild(liEl);
	}
}

var capitol = {
  location: 'Capitol Hill',
	minCustomer: 20,
	maxCustomer: 38,
	avgCookiesPerSale: 2.3,
	hourlyTotals: function() {
		var newArray = [];
		for(var i=0; i < hours.length; i++){
			newArray.push(Math.round((getRandomIntInclusive(this.minCustomer, this.maxCustomer) )*(this.avgCookiesPerSale)))
		}
		return newArray;
	}
};

capitol.render = function() {
	var capitolUl = document.getElementById('capitolstore');
	for (var i = 0; i < hours.length; i++){
		var liEl = document.createElement('li');
		liEl.textContent = `${hours[i]}: ${this.hourlyTotals()[i]} cookies`
		capitolUl.appendChild(liEl);
	}
}

var alki = {
  location: 'Alki',
	minCustomer: 2,
	maxCustomer: 16,
	avgCookiesPerSale: 4.6,
	hourlyTotals: function() {
		var newArray = [];
		for(var i=0; i < hours.length; i++){
			newArray.push(Math.round((getRandomIntInclusive(this.minCustomer, this.maxCustomer) )*(this.avgCookiesPerSale)))
		}
		return newArray;
	}
};

alki.render = function() {
	var alkiUl = document.getElementById('alkistore');
	for (var i = 0; i < hours.length; i++){
		var liEl = document.createElement('li');
		liEl.textContent = `${hours[i]}: ${this.hourlyTotals()[i]} cookies`
		alkiUl.appendChild(liEl);
	}
}

pike.render();
seatac.render();
seattle.render();
capitol.render();
alki.render();
