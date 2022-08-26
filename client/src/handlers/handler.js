import { appendData } from '../components/component.js';

export function getData() {
	/// fetching the data from the url //
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(function (response) {
			/// converting the data to a json file ///
			return response.json();
		})
		/// attaching the data to our dynamic list function ///
		.then(function (data) {
			appendData(data);
		})
		/// throwing an error in case the data cannot be fetched ///
		.catch(function (err) {
			console.log(err);
		});
}

export function getUser() {
	let user = 'https://jsonplaceholder.typicode.com/users/';
	/// concatenating the URL and the user input value
	let whatTheUserWrites = document.getElementById('search-bar').value;
	user = user + whatTheUserWrites;
	/// fetching the concatenated URL
	fetch(user)
		.then(function (response) {
			return response.json();
		})
		/// Printing the results///
		.then(function (data) {
			document.getElementById('show-results').innerHTML =
				'ID: ' +
				data.id +
				' ' +
				'<br>' +
				'Name: ' +
				data.name +
				' ' +
				'<br>' +
				'Username: ' +
				data.username +
				' ' +
				'<br>' +
				'Email: ' +
				data.email +
				'<br>' +
				'Address: ' +
				data.address.city;
			console.log(data);
		})
		/// throwing an error in case the data cannot be fetched ///
		.catch(function (err) {
			console.log(err);
			document.getElementById('show-results').innerHTML =
				'User not found!, please write a number between 1 an 10';
		});
}
