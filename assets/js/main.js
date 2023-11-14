/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToogle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//   menu show if exists
if (navToogle) {
  navToogle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// menu hidden if exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== SHADOW HEADER ===============*/
const ShadowHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50 ? header.classList.add("shadow-header") : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", ShadowHeader);


/*=============== FORM ===============*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbwzW0i80mQWTN4HIhfAF3Led2z9Q6NjUUWWhkgOMSDC1xBJLm3mgL08MJShbPL8hKPHvw/exec'
  const form = document.forms['submit-to-google-sheet']

  function handleSubmit(event) {
        event.preventDefault();
        const form = document.forms["submit-to-google-sheet"];
        const nameInput = form.elements["name"];
        const emailInput = form.elements["email"];
        const messageInput = form.elements["pesan"];

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
          // Menampilkan SweetAlert jika terjadi kesalahan input
          Swal.fire({
            icon: "error",
            title: "Kesalahan",
            text: "Harap lengkapi semua kolom sebelum mengirim pesan",
          });
          return;
        }

        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            console.log("Success!", response);
            // Menampilkan SweetAlert setelah pengiriman berhasil
            Swal.fire({
              icon: "success",
              title: "Berhasil",
              text: "Pesan telah terkirim",
              showConfirmButton: false,
              timer: 2000, // Menutup otomatis pesan setelah 2 detik
            });
            // Mereset inputan
            form.reset();
          })
          .catch((error) => {
            console.error("Error!", error.message);
            // Menampilkan SweetAlert jika terjadi kesalahan
            Swal.fire({
              icon: "error",
              title: "Kesalahan",
              text: "Terjadi kesalahan saat mengirim pesan",
            });
          });
      }


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

//previously selected theme(if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//obtain current theme that has interface by validating light theme class in html
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line");

//validate if user change theme light or dark theme
if (selectedTheme) {
  //if fullfilled, change theme mode
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme);
}

//activate or deactivate manually with theme button
themeButton.addEventListener("click", () => {
  //add or remove icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  //save theme and current icon that user choose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
  // reset:true,
});
sr.reveal(`.home__profile, .about__image, .contact__mail`, { origin: "right" });
sr.reveal(
  `.home__name, .home__info, .about__container, 
.section__title-1, .about__info, .contact__social, .contact__data`,
  { origin: "left" }
);
sr.reveal(`#skills, .projects__card`, { interval: 100 });

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".projects__container", {
  selectors: {
    target: ".projects__card",
  },
  animation: {
    duration: 300,
  },
});
/* Link active work */
const linkWork = document.querySelectorAll(".work__items");
function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));