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
		console.log(liEl, 'liEl')
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
		console.log(liEl, 'liEl')
		seatacUl.appendChild(liEl);
	}
}