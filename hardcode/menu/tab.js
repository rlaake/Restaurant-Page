function myFunction() {
  let x = document.getElementById("link-container");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}