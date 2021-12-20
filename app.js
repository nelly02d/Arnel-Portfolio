//selector
const button = document.querySelector("#mobile-menu");
const menu = document.querySelector(".menu");
const barOption = document.querySelector(".bar__option");
const goTop = document.querySelector(".gotop");
const nav = document.querySelector('.navbar');
const footer = document.querySelector("footer");


//function
const mobileMenu = () => {
  menu.classList.toggle("active");
  button.classList.toggle("is-active");
//bar option
  if (barOption.innerHTML === "Menu") {
    barOption.innerHTML = "Close";
  } else {
    barOption.innerHTML = "Menu";
  }
}



const year = new Date().getFullYear();
footer.innerHTML = `&copy; ${year} Arnel Hernandez. All Rights Reserved.`



//scroll effect
const onScroll = () => {
  if(window.pageYOffset > 100) {
    goTop.classList.add("active");
    nav.classList.add("scroll");
  } else {
    goTop.classList.remove("active");
    nav.classList.remove("scroll");
  }
}

//Event listener
button.addEventListener("click", mobileMenu);
window.addEventListener("scroll", onScroll);




