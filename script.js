var table = document.getElementById("names");
var nameval = document.getElementById("name");
var lastnameval = document.getElementById("lastname");
var ageval = document.getElementById("age");
var add = document.getElementById("add");
var removefirst = document.getElementById("remove-first");
var removelast = document.getElementById("remove-last");
var rowCount = table.rows.length;
let rows = 0;

add.addEventListener("click", () => {
  if (nameval.value.length == 0 || lastnameval.value.length == 0 || age.value < 1) {
    alert("Įveskite duomenis");
} else {
  var tr = document.createElement("tr");
  table.append(tr);
  var td = document.createElement("td");
  tr.append(td);
  td.innerText = nameval.value;
  var td = document.createElement("td");
  tr.append(td);
  td.innerText = lastnameval.value;
  var td = document.createElement("td");
  tr.append(td);
  td.innerText = ageval.value;
  rows++;
  document.getElementById("name"). value = ""
  document.getElementById("lastname"). value = ""
  document.getElementById("age"). value = ""
}});


removefirst.addEventListener("click", () => {
  if (rows == 0) {
    alert("Nėra ką trinti");
  } else {
  table.deleteRow(rowCount = 1);
  rows--;
}});

removelast.addEventListener("click", () => {
  if (rows == 0) {
    alert("Nėra ką trinti");
  } else {
  table.deleteRow(rowCount = -1);
  rows--;
}});