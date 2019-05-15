document.getElementById("button").addEventListener("click", e => {
  e.preventDefault();
  var username = document.getElementsByClassName("inputtext")[0].value;
  var password = document.getElementsByClassName("inputtext")[1].value;
  document.getElementsByClassName("inputtext")[0].value = "";
  document.getElementsByClassName("inputtext")[1].value = "";
  console.log(db);
  db.collection("Information").add({ username: username, password: password });
});
