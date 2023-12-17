const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


const addTask = () => {
  if (inputBox.value == "") {
    alert('You Must write Something');
  }
  else {
    let li = document.createElement("li"); // this code for add the list
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span"); // this code for add remove icon 
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""; 
  saveData();
}

// this code for checkmark line and remove item
listContainer.addEventListener('click', function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle('checked');
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
  
}, false);

//this code for store the data in browser localStorage
saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
}

// this code save  the data if browser is closed. 
showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();