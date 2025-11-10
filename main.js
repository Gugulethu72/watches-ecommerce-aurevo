const menuBtn = document.getElementById("menu-btn");
const navLeft = document.getElementById("nav-menu-left");
const navRight = document.getElementById("nav-menu-right");
const navHeader = document.querySelector(".nav__header");
const navLinks = document.querySelectorAll(".nav__links a");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;

  navLeft.classList.toggle("open", menuOpen);
  navRight.classList.toggle("open", menuOpen);

  navHeader.classList.toggle("hide", menuOpen);
  document.body.classList.toggle("no-scroll", menuOpen);

  menuBtn.innerHTML = menuOpen
    ? '<i class="ri-close-line"></i>'
    : '<i class="ri-menu-line"></i>';
});

function closeMenu() {
  navLeft.classList.remove("open");
  navRight.classList.remove("open");
  navHeader.classList.remove("hide");
  document.body.classList.remove("no-scroll");
  menuBtn.innerHTML = '<i class="ri-menu-line"></i>';
  menuOpen = false;
}

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    closeMenu();
  });
});

const cards = document.querySelectorAll(".testimony__card");
let current = 0;


function showCard(index){
  cards.forEach((card, i) => {
    card.style.display = i === index ? "block" : "none";
  });
}

document.querySelector(".swiper-button-next").addEventListener("click", () => {
  current = (current + 1) % cards.length;
  showCard(current);
});

document.querySelector(".swiper-button-prev").addEventListener("click", () => {
  current = (current - 1 + cards.length)  % cards.length;
  showCard(current);
});

showCard(current);