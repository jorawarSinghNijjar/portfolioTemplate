//front-image

const frontImage = document.querySelector('#front-image');
const centerBoxDesktop = document.querySelector('.desktop');
const centerBoxMobile = document.querySelector('.mobile');

function displayContent(){
    let viewportWidth = window.innerWidth;
    if(viewportWidth <= 500){
        frontImage.setAttribute('src','images/mobile-image.jpg');
        frontImage.style.objectFit = "fill";
        frontImage.style.height="70%";
        frontImage.style.marginTop="2rem";
        centerBoxDesktop.style.display = "none";
        centerBoxMobile.style.display = "block";
    }
    else{
        frontImage.setAttribute('src','images/developer-image.jpg');
        centerBoxDesktop.style.display = "block";
        centerBoxMobile.style.display = "none";
    }
}
$(window).resize(function(){
    displayContent();
});
$(document).ready(function(){
    displayContent();
});


let animationDone = false;
//animate find out button
const findOut = document.querySelector("#find-out");
const findOutArrow = document.querySelector(".fa-angle-double-right");
findOut.classList.add("animated","bounce");
findOut.addEventListener("mouseenter",() => {
    
    $(findOutArrow).animate({marginLeft:"5rem"});
});

findOut.addEventListener("mouseleave",() => {
    // findOut.classList.remove("animated","wobble");
    $(findOutArrow).animate({marginLeft:"0rem"});
});




//sticky nav on scroll
const html = document.querySelector('html');
const nav = document.querySelector('#navbar');

window.addEventListener('scroll', (e) => {
    if((html.clientHeight - window.scrollY) < 0){
        nav.classList.add('fixed-top');
        
        if(!animationDone){
            animateAbout();
        }
        
        
    }
    else{
        nav.classList.remove('fixed-top');
    }
});




//Skill scale

const scaleWrapper = document.querySelector('.scale-wrapper');
const skills = [
    { name:'Java', value: 80 },
    { name: 'Javascript', value:90},
    { name: 'HTML', value: 80},
    { name: 'CSS', value: 70},
    { name: 'React', value: 70},
    { name: 'Node.js', value: 60}
];

skills.forEach(skill => {
    scaleWrapper.innerHTML += `
        <div class="scale my-2">
            <div class="skill-name text-white">
                ${skill.name}
            </div>
            <div class="percent-wrapper">
                <div class="skill-percentage">
                    ${skill.value}%
                </div>
            </div>
        </div>
    `;
    
});


const percent = document.getElementsByClassName('skill-percentage');
const percentArr = Array.from(percent);
const skillName = document.querySelector('.skill-name');



//animate functions
const aboutHeading = document.querySelector('#about-heading');
const authorDetail = document.querySelector('#author-detail');
const aboutUnderline = document.querySelector('#about-underline');

const animateAbout = () => {
    aboutHeading.classList.add('animated','bounceInLeft','slower');
    scaleWrapper.classList.add('animated','bounceInRight','slower');
    authorDetail.classList.add('animated','bounceInLeft','slower');
    aboutUnderline.classList.add('animated','bounceInLeft', 'slower');
    setTimeout(()=>{
        percentArr.forEach(item =>{
            let width = item.textContent.trim().slice(0,-1) + "%";
            $(item).animate({
                width: width
            },'slow');
        });
    },2000);

    animationDone = true;
}

