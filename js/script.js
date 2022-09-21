const navbar = document.querySelector(".nav-item")
const hambBtn = document.querySelector(".hamburger")
let counter = 1

hambBtn.addEventListener("click", ()=> {
  counter++
  if (counter % 2 == 0) {
    navbar.style.display = "flex"
  } else {
    navbar.style.display = "none"
  }
})