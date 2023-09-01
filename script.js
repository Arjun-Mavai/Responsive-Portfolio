console.log("script file is running properly");
 

document.addEventListener("DOMContentLoaded", function () {
  // toggle icon navbar
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  // typed output code

  // scroll sections
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    console.log(sections);
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (sec) {
        if (top >= offset && top < offset + height) {
          // active navbar links
          navLinks.forEach((links) => {
            links.classList.remove("active");
            document
              .querySelector("header nav a[href*=" + id + "]")
              .classList.add("active");
          });
          // active sections for animation on scroll
          sec.classList.add("show-animate");
        }
        // if want to use animation that repeats on scroll use this
        else {
          sec.classList.remove("show-animate");
        }
      }
    });
    // sticky header
    let header = document.querySelector("header");
    if (header) {
      header.classList.toggle("sticky ", window.scrollY > 100);
    }

    // remove toggle icon and navbar when click navbar links (scroll)

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

    // animation footer on scroll

    let footer = document.querySelector('footer');
if (footer) {
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

  };
});

console.log("script file is running properly end of file");

// if(top >= offset && top < offset + height){:
//     What it does: Checks if the user has scrolled to the current section.
//     Analogy: You're in an elevator and you're checking if you've reached the correct floor.
//     DOM Example: offset is like the floor number, height is the height of that floor,
// and top is where the elevator currently is.
//     Grid Example: Imagine a grid where each cell is a floor.
// offset is the starting point of a cell,
// and offset + height is the ending point. You're checking if you're within that cell.
