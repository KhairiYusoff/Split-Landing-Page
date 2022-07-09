//grab left, right and container DIV
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

//addEventListener on 2 type of events; mouse enter and mouse leave
left.addEventListener("mouseenter", () => container.classList.add("hover-left"));
left.addEventListener("mouseleave", () => container.classList.remove("hover-left"));
right.addEventListener("mouseenter", () => container.classList.add("hover-right"));
right.addEventListener("mouseleave", () => container.classList.remove("hover-right"));