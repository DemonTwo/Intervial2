const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

const ainicio = document.querySelector(".ini");
const aserv = document.querySelector(".serv");
const anos = document.querySelector(".nos");
const acont = document.querySelector(".cont");
const aredes = document.querySelector(".red");
menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
}
cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}

/*Coasa Fea*/
ainicio.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}
aserv.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}
anos.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}
acont.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}
aredes.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

/*Filtro */
const info = document.querySelector(".Info-serv");
let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for (let i = 0; i < sortBtn.length; i++) {
  sortBtn[i].addEventListener('click', function () {
    for (let j = 0; j < sortBtn.length; j++) {
      sortBtn[j].classList.remove('current');
    }
    this.classList.add('current');
    let targetData = this.getAttribute('data-target');

    for (let k = 0; k < sortItem.length; k++) {
      sortItem[k].classList.remove('active');
      sortItem[k].classList.add('delete');

      if (sortItem[k].getAttribute('data-item') == targetData) {
        sortItem[k].classList.remove('delete');
        sortItem[k].classList.add('active');
      }
    }
  });
}

/*Animacion input*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});