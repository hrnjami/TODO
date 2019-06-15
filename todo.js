// Na svaku stavku liste dodajemo x dugme (span element)  
var tasksList = document.getElementsByTagName("li");
var i;
var n = tasksList.length;
for (i = 0; i < n; i++) {
  var span = document.createElement("span");
  var iks = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(iks);
  tasksList[i].appendChild(span);
}

// Klikom na x dugme sakrivamo konkretnu stavku liste 
var close = document.getElementsByClassName("close");
var n1 = close.length;
var i;
for (i = 0; i < n1; i++) {
  close[i].onclick = function() {
    var hidingElement = this.parentElement.style.display;
    hidingElement.style.display = "none";
  }
}

// Proveravamo na koju stavku liste je "kliknuto" "i dodajemo joj klasu "checked"
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function createTask() {
  var newLi = document.createElement("li");
  var newTask = document.getElementById("input1").value;
  var t = document.createTextNode(newTask);
  newLi.appendChild(t);
  if (newTask === "") {
    alert("You have to actually type your new task!");
  } else {
    document.getElementById("ul1").appendChild(newLi);
  }
  document.getElementById("input1").value = "";

  var span = document.createElement("span");
  var iks = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(iks);
  newLi.appendChild(span);
  var n2 = close.length

  for (i = 0; i < n2; i++) {
    close[i].onclick = function() {
      var hidingElement = this.parentElement;
      hidingElement.style.display = "none";
    }
  }
}