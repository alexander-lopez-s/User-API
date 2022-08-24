function getData(){
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
    document.getElementById("could-not-load").innerHTML = err.message;
    console.log(err)
});
function appendData(data) {
let usersContainer = document.getElementById("show-results");
  /// looping through the json file and creating a list for every object found //
for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li"); li.innerHTML = 'ID: ' + data[i].id + ' ' + ("<br>") + 'Name: ' + data[i].name + ' ' + ("<br>") + 'Username: ' + data[i].username + ' ' + ("<br>") + 'Email: ' + data[i].email;
    li.className = "charts";
    li.id = "charts";
  /// appending our dynamic list to our existing HTML div //
    usersContainer.appendChild(li);
  /// disabling the button to avoid printing the results again ///
    document.getElementById("display-users").disabled = 'true';
}
let myArray = document.getElementsByTagName('li');
console.log(myArray)
function searchUser() {
    let input = document.getElementById('search-bar').value;
    let x = myArray;
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

}
}



