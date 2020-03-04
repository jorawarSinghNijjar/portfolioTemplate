//animate find out button
const findOut = document.querySelector("#find-out");

findOut.addEventListener("mouseenter",() => {
    findOut.classList.add("animated","wobble");
});

findOut.addEventListener("mouseleave",() => {
    findOut.classList.remove("animated","wobble");
});

//animate name
const author = document.querySelector("#author");

author.addEventListener("mouseenter",() => {
    author.classList.add("animated","bounce");
});

author.addEventListener("mouseleave",() => {
    author.classList.remove("animated","bounce");
});
