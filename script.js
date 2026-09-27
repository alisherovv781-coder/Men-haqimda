const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function moveCursor() {

    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(moveCursor);
}

moveCursor();




/* Cursor kattalashishi */

const links = document.querySelectorAll("a, button");

links.forEach((link) => {

    link.addEventListener("mouseenter", () => {
        cursor.style.width = "60px";
        cursor.style.height = "60px";
        cursor.style.background = "rgba(100,255,218,0.12)";
    });

    link.addEventListener("mouseleave", () => {
        cursor.style.width = "35px";
        cursor.style.height = "35px";
        cursor.style.background = "rgba(100,255,218,0.08)";
    });

});

const z7Sections = document.querySelectorAll(
    ".z7-story, .z7-works, .z7-skills, .z7-contact"
);

const z7Observer = new IntersectionObserver(
    (items) => {

        items.forEach((item) => {

            if (item.isIntersecting) {
                item.target.classList.add("z7-visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);

z7Sections.forEach((item) => {
    z7Observer.observe(item);
});


/* Sichqoncha */

const z7Pointer = document.querySelector(".z7-pointer");

let z7MouseX = 0;
let z7MouseY = 0;

let z7CurrentX = 0;
let z7CurrentY = 0;

document.addEventListener("mousemove", (e) => {
    z7MouseX = e.clientX;
    z7MouseY = e.clientY;
});

function z7Cursor() {

    z7CurrentX += (z7MouseX - z7CurrentX) * 0.12;
    z7CurrentY += (z7MouseY - z7CurrentY) * 0.12;

    z7Pointer.style.left = z7CurrentX + "px";
    z7Pointer.style.top = z7CurrentY + "px";

    requestAnimationFrame(z7Cursor);
}

z7Cursor();


/* Bosilganda */

document.addEventListener("mousedown", () => {
    z7Pointer.classList.add("z7-click");
});

document.addEventListener("mouseup", () => {
    z7Pointer.classList.remove("z7-click");
});