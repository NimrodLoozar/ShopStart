// Opens side menu Function
// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }
// Closes side menu Function
// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }

function openNav() {
  document.getElementById("mySidenav").classList.add("opened"); // Az osztály hozzáadása
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove("opened"); // Az osztály eltávolítása
}
