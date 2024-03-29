//Mobile mode
let mobileMode = false;

//Size change effect in window

const desktopContent = document.getElementsByClassName("desktop");
const desktopContentArr = Array.from(desktopContent);

const mobileContent = document.getElementsByClassName('mobile');
const mobileContentArr = Array.from(mobileContent);

function showNodes(arr) {
    arr.forEach(node => {
        node.style.display = "block";
    });
}

function hideNodes(arr) {
    arr.forEach(node => {
        node.style.display = "none";
    });
}

function displayContent() {
    let viewportWidth = window.innerWidth;
    if (viewportWidth <= 500) {
        mobileMode = true;
        showNodes(mobileContentArr);
        hideNodes(desktopContentArr);

    }
    else {
        mobileMode = false;
        showNodes(desktopContentArr);
        hideNodes(mobileContentArr);
    }
}

displayContent();
// $(window).resize(function(){
//     displayContent();
// });
// $(document).ready(function(){
//     displayContent();
// });


// Mobile Menu button

$('#menu-btn').click(() => {
    if ($('#menu-text').text() == "Menu") {
        $('#welcome-text').fadeOut(() => {
            $('#home-author-img').hide();
            $('#menu-text').text('Back');
            $('#menu-options').show();
        });
    }
    else if ($('#menu-text').text() == "Back") {
        $('#menu-options').fadeOut(() => {
            $('#welcome-text').fadeIn();
            $('#home-author-img').fadeIn();
            $('#menu-text').text('Menu');
        });

    }


});


let animationDone = false;
let deAnimationDone = false;
//animate find out button
const findOut = document.querySelector("#find-out");
const findOutArrow = document.querySelector(".fa-angle-double-right");

findOut.addEventListener("mouseenter", () => {

    $(findOutArrow).animate({ marginLeft: "5rem" });
});

findOut.addEventListener("mouseleave", () => {
    $(findOutArrow).animate({ marginLeft: "0rem" });
});




//sticky nav on scroll
const html = document.querySelector('html');
const nav = document.querySelector('#navbar');

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 1000 || window.scrollY < 300) {
        if (!deAnimationDone) {
            deAnimateAbout();
        }

    }

    if (window.scrollY > 300) {
        nav.classList.add('fixed-top');
        if (!animationDone) {
            animateAbout();
        }
    }
    else {
        nav.classList.remove('fixed-top');
    }

});






//Skill scale

const scaleWrapper = document.querySelector('.scale-wrapper');
const skills = [
    { name: 'Java', value: 80 },
    { name: 'Javascript', value: 90 },
    { name: 'HTML', value: 80 },
    { name: 'CSS', value: 85 },
    { name: 'React', value: 80 },
    { name: 'Node.js', value: 85 },
    { name: 'SpringBoot', value: 70 },
    { name: 'Webflow', value: 80 }
];


skills.forEach(skill => {
    scaleWrapper.innerHTML += `
        <div class="scale my-2">
            <div class="skill-name text-white">
                <span class="v-center">
                ${skill.name}
                </span>
            </div>
            <div class="percent-wrapper">
                <div class="skill-percentage">
                    <span class="skill-value v-center">${skill.value}%</span>
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

    if (!mobileMode) {

        //remove fadeouts
        aboutHeading.classList.remove('animated', 'fadeOutLeft');
        scaleWrapper.classList.remove('animated', 'fadeOutRight');
        authorDetail.classList.remove('animated', 'fadeOutLeft');
        aboutUnderline.classList.remove('animated', 'fadeOutLeft');
        //add fadins
        aboutHeading.classList.add('animated', 'fadeInLeft', 'slow');
        scaleWrapper.classList.add('animated', 'fadeInRight', 'slow');
        authorDetail.classList.add('animated', 'fadeInLeft', 'slow');
        aboutUnderline.classList.add('animated', 'fadeInLeft', 'slow');
    }

    setTimeout(() => {
        percentArr.forEach(item => {
            let width = item.textContent.trim().slice(0, -1) + "%";
            $(item).animate({
                width: width,
            }, 2500);
            $(item.children[0]).show();
        });

    }, 2000);

    animationDone = true;
}

//deAnimate functions
const deAnimateAbout = () => {
    if (!mobileMode) {
        aboutHeading.classList.remove('animated', 'fadeInLeft');
        scaleWrapper.classList.remove('animated', 'fadeInRight');
        authorDetail.classList.remove('animated', 'fadeInLeft');
        aboutUnderline.classList.remove('animated', 'fadeInLeft');
        // fading away
        aboutHeading.classList.add('animated', 'fadeOutLeft');
        scaleWrapper.classList.add('animated', 'fadeOutRight');
        authorDetail.classList.add('animated', 'fadeOutLeft');
        aboutUnderline.classList.add('animated', 'fadeOutLeft');

        deAnimationDone = true;
    }

}


//Projects
let projects = [];
let reactBadge = `<span class="badge bg-react"><i class="fab fa-react"></i></span> `;
let bootstrapBadge = `<span class="badge bg-red"><i class="fab fa-bootstrap"></i></span> `;
let cssBadge = `<span class="badge badge-info"><i class="fab fa-css3-alt"></i></span> `;
let semanticUIBadge = `<span class="badge badge-warning">S</span> `;
let unsplashBadge = `<span class="badge badge-success">Unsplash</span> `;
let html5Badge = `<span class="badge bg-green"><i class="fab fa-html5"></i></span> `;
let jQueryBadge = `<span class="badge badge-danger"><img src="images/jquery.png" style="width:1em;"/></span> `;
let javaScriptBadge = `<span class="badge badge-warning"><i class="fab fa-js-square"></i></span> `;
let materializeBadge = `<span class="bg-white"><img src="images/materialize.svg" style="width:1em;"/></span>`;
let webflowBadge = `<span ><img src="images/webflow-icon.svg" style="width:1.2em;"/></span>`;
let figmaBadge = `<span><img src="images/figma-icon.svg" style="width:1em;"/></span>`;

class Project {

    constructor(name, imageSrc, href, cardTitle, cardText) {
        this.name = name;
        this.imageSrc = imageSrc;
        this.href = href;
        this.cardTitle = cardTitle;
        this.cardText = cardText;
        this.setBadges(this.name);
        projects.push(this);
    }



    setBadges(projectName) {

        switch (projectName) {
            case "animalifeTV":
                this.badges = html5Badge + cssBadge;
                break;
            case "healthCare365":
                this.badges = html5Badge + reactBadge + bootstrapBadge;

                break;
            case "easyCoding":
                this.badges = html5Badge + javaScriptBadge + cssBadge + jQueryBadge;
                break;
            case "pictureSearch":
                this.badges = html5Badge + javaScriptBadge + cssBadge + bootstrapBadge + jQueryBadge;
                break;
            case "myApp":
                this.badges = html5Badge + cssBadge + bootstrapBadge;
                break;
            case "loanCalculator":
                this.badges = html5Badge + cssBadge + bootstrapBadge + javaScriptBadge;
                break;
            case "traCalorie":
                this.badges = html5Badge + cssBadge + javaScriptBadge + materializeBadge;
                break;
            case "gitHubFinder":
                this.badges = html5Badge + cssBadge + javaScriptBadge + materializeBadge;
                break;
            case "taskList":
                this.badges = html5Badge + cssBadge + javaScriptBadge + materializeBadge;
                break;
            case "truckye":
                this.badges = webflowBadge + figmaBadge + cssBadge + javaScriptBadge;
                break;
            case "salut":
                this.badges = webflowBadge + figmaBadge;
                break;
            default:
                this.badges = "";
        }
    }

}

const animalifeTV = new Project("animalifeTV", "images/white-dog.jpg", "https://jorawarsinghnijjar.github.io/animalifeTV/",
    "AnimalifeTV", "Front End Web Design for a wildlife broadcasting company. Developed using Sass preprocesser.");

const truckye = new Project("truckye", "images/truckye.jpg", "https://truckye.webflow.io/", "Truckye", "Website for a trucking company. Designed using Figma and developed using Webflow and Javascript");

const healthCare365 = new Project("healthCare365", "images/Healthcare-img.jpg", "https://jorawarsinghnijjar.github.io/HealthCareApp/", "Healthcare 365", "This application is a management tool for clinics and hospitals. It provides patient registeration service to keep a record of patients. More services will be added soon.");

const salutApp = new Project("salut", "images/salut.svg", "https://salut-c6bbf8.webflow.io/", "Salut", "Website for a simple chat app. Designed using Figma and developed using Webflow");

const loopEducation = new Project("loopEducation", "images/loop-education-logo.png", "https://jorawarsinghnijjar.github.io/loop-education-test/",
    "Loop Education Services", "Immigration and Education services website front end developed using React.js");

const weatherApp = new Project("weatherApp", "images/weather-app.png", "https://jorawarsinghnijjar.github.io/weather-app/",
    "Weather App", "Web App to stay informed about weather conditions around the world");

const easyCoding = new Project("easyCoding", "images/easyCoding.jpg", "https://jorawarsinghnijjar.github.io/easyCoding/", "Easy Coding", "Provides live editing of a webpage using HTML, CSS and JAVASCRIPT. Very easy to use and user-friendly interface.");

const pictureSearch = new Project("pictureSearch", "images/pictureSearch.jpeg", "https://jorawarsinghnijjar.github.io/pictureSearch/", "Picture Search", "Simple image search application developed with React and powered by Unsplash API.");

const loanCalculator = new Project("loanCalculator", "images/loanCalculator.JPG", "https://jorawarsinghnijjar.github.io/loanCalculator/", "Simple Loan and EMI Calculator", "It is a basic EMI calculator designed using bootstrap.");

const traCalorie = new Project("traCalorie", "images/TracCalorie.JPG", "https://jorawarsinghnijjar.github.io/TracCalorie/", "TraCalorie", "Application designed to keep a track of calories");

const gitHubFinder = new Project("gitHubFinder", "images/gitHubFinder.jpg", "https://jorawarsinghnijjar.github.io/gitHubFinder/", "GitHub Finder", "Github User search application powered by GitHub API designed using pure JavaScript.");

const taskList = new Project("taskList", "images/taskList.JPG", "https://jorawarsinghnijjar.github.io/taskList/",
    "Task List", "Web App to save the To do tasks designed using Materialize");


let projectSection = document.querySelector('#projects-display');


for (let i = 0; i < projects.length; i += 2) {

    projectSection.innerHTML +=

        `<div class="row mt-4">
    <div class="col-md">
      <a href="${projects[i].href}" target="_blank">
      <div class="card text-white bg-primary shadow mb-4" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4 project-img-container">
            <img src="${projects[i].imageSrc}" alt=""
              class="card-img img-fluid project-img">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${projects[i].cardTitle} ${projects[i].badges}</h5>
              <p class="card-text">${projects[i].cardText}<br>
              </p>
            </div>
          </div>
        </div>
      </div>
      </a>
    </div>
    
    <div class="col-md">
      <a href="${projects[i + 1].href}" target="_blank">
        <div class="card text-white bg-primary shadow mb-4" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4 project-img-container">
              <img src="${projects[i + 1].imageSrc}"
            class="card-img project-img">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${projects[i + 1].cardTitle} ${projects[i + 1].badges}</h5>
                <p class="card-text">${projects[i + 1].cardText}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    </div>`;

};


//Mobile: Menu item events

function changeHeadingsColor(color) {
    $('#projects-heading').css({ 'color': color });
    $('#about-heading').css({ 'color': color });
    $('#contact-heading').css({ 'color': color });
    $('#qualities-heading').css({ 'color': color });
}

function changeDesign() {
    $('.main-content').show();
    changeHeadingsColor("#0071BD");
    $('.partition').css({ "background-color": "#108781" });
    $('#navbar').hide();
    $('#about').css({ "padding-top": "10px" });
    $('#mobile-home').hide();
    $('.main-content').css({ "position": "absolute", "top": "0", "left": "0" });
    $('#back-to-menu').show();
    $('#about').css({ "margin-top": "1rem" });
    if (!animationDone) {
        animateAbout();
    }
}


$('#about-mobile-link').click(() => {
    changeDesign();
});

$('#portfolio-mobile-link').click(() => {
    changeDesign();
});

$('#contact-mobile-link').click(() => {
    changeDesign();
});

//Back to menu click
const backToMenuButton = document.getElementById("back-to-menu-button");
backToMenuButton.addEventListener('click', () => {

    $('#about').css({ "padding-top": "120px" });
    $('.main-content').css({ "position": "absolute", "top": "100vh", "left": "0" });
    $('#mobile-home').show();
    $('.main-content').hide();

})









