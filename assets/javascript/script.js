const cross = document.getElementById('bar-cross');
const bar = document.getElementById('bar-line');
const resNav = document.querySelector('.res-nav-display');
const navbarList = document.querySelector('.navbar-list').cloneNode(true); // Clone the navbar

resNav.appendChild(navbarList);

bar.addEventListener("click", () => {
    bar.style.display = "none";
    cross.style.display = "block";
    resNav.style.display = "flex";
});

cross.addEventListener("click", () => {
    bar.style.display = "block";
    cross.style.display = "none";
    resNav.style.display = "none";
});









// const bar = document.getElementById('bar-line');
// const cross = document.getElementById('bar-cross');
// const resNav = document.querySelector('.res-nav-display');
// const navbarList = document.querySelector('.navbar-list').cloneNode(true); 

// resNav.appendChild(navbarList);

// // Add a class 'active' to control open/close behavior
// bar.addEventListener("click", () => {
//     if (resNav.style.display === "flex") {
//         resNav.style.display = "none";
//         cross.style.display = "block"
//     } else {
//         resNav.style.display = "flex";
//         bar.classList.add("active"); 
//         cross.style.display = ""
//     }
// });










// const cross = document.getElementById('bar-cross');
// const bar = document.getElementById('bar-line');
// const resNav = document.querySelector('.res-nav-display')
// // const threeBtn = document.querySelector('.three-line')
// // const crossBtn = document.querySelector('.cross-line')

// bar.addEventListener("click", () => {

//     bar.style.display = "none"
//     cross.style.display = "block"
//     resNav.style.display = "block"

// })

// cross.addEventListener("click", () => {

//     bar.style.display = "block"
//     cross.style.display = "none"
//     resNav.style.display = "none"

// })