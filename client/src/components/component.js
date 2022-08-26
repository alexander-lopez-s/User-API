export function appendData(data) {
	const usersContainer = document.getElementById('show-results');
	/// looping through the json file and creating a list for every object found //
	for (let i = 0; i < data.length; i++) {
		const li = document.createElement('li');
		li.innerHTML =
			'ID: ' +
			data[i].id +
			' ' +
			'<br>' +
			'Name: ' +
			data[i].name +
			' ' +
			'<br>' +
			'Username: ' +
			data[i].username +
			' ' +
			'<br>' +
			'Email: ' +
			data[i].email +
			'<br>' +
			'Address: ' +
			data[i].address.city;
		li.className = 'charts';
		li.id = 'charts';
		/// appending our dynamic list to our existing HTML div //
		usersContainer.appendChild(li);
	}
}

/// in component we add the function that creates new elements using JS and sent to the DOM ///
