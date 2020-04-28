//Size change effect in window

const desktopContent = document.getElementsByClassName("desktop");
const desktopContentArr = Array.from(desktopContent);

const mobileContent = document.getElementsByClassName('mobile');
const mobileContentArr = Array.from(mobileContent);

function showNodes(arr){
    arr.forEach(node => {
        node.style.display = "block";
    });
}

function hideNodes(arr){
    arr.forEach(node => {
        node.style.display = "none";
    });
}

function displayContent(){
    let viewportWidth = window.innerWidth;
    if(viewportWidth <= 500){

        showNodes(mobileContentArr);
        hideNodes(desktopContentArr);
        // frontImage.style.objectFit = "cover";
        // frontImage.style.height="70%";
        // frontImage.style.marginTop="2rem";
        // centerBoxDesktop.style.display = "none";
        // centerBoxMobile.style.display = "block";
    }
    else{
        showNodes(desktopContentArr);
        hideNodes(mobileContentArr);
    }
}
$(window).resize(function(){
    displayContent();
});
$(document).ready(function(){
    displayContent();
});


// Mobile Menu button

$('#menu-btn').click(()=>{
    if($('#menu-text').text() == "Menu"){
        $('#welcome-text').fadeOut(()=>{
            $('#home-author-img').hide();
            $('#menu-text').text('Back');
            $('#menu-options').show();
        });
    }
    else{
        $('#menu-options').fadeOut(()=>{
            $('#welcome-text').fadeIn();
            $('#home-author-img').fadeIn();
            $('#menu-text').text('Menu');
        });
        
    }
    
    
});


let animationDone = false;
//animate find out button
const findOut = document.querySelector("#find-out");
const findOutArrow = document.querySelector(".fa-angle-double-right");
// findOut.classList.add("animated","heartBeat");
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
    { name: 'Node.js', value: 60},
    { name: 'Bootstrap', value: 70},
    { name: 'Python', value: 40}
];

skills.forEach(skill => {
    scaleWrapper.innerHTML += `
        <div class="scale my-2">
            <div class="skill-name text-white">
                ${skill.name}
            </div>
            <div class="percent-wrapper">
                <div class="skill-percentage">
                    <span class="skill-value">${skill.value}%</span>
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
                width: width,
            },'slow');
            $(item.children[0]).show();
        });
        
    },2000);

    animationDone = true;
}



