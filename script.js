const enterButton = document.getElementById("enter-btn");

const loadingScreen = document.getElementById("loading-screen");

const mainSite = document.getElementById("main-site");


/* =========================
   VIEWPORT FIT
========================= */

function updateViewportSize() {

    const viewport = window.visualViewport;

    const height = viewport ? viewport.height : window.innerHeight;

    document.documentElement.style.setProperty(
        "--viewport-height",
        `${height}px`
    );

}


updateViewportSize();

window.addEventListener("resize", updateViewportSize);

if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", updateViewportSize);
}


/* =========================
   ENTER WEBSITE
========================= */

enterButton.addEventListener("click", function () {

    loadingScreen.classList.add("hide");

    mainSite.classList.add("show");

});


/* =========================
   ROOM INTERACTION
========================= */

const rooms = document.querySelectorAll(".room");


rooms.forEach(function(room) {

    room.addEventListener("mousemove", function(event) {

        const rect = room.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;

        const rotateY = (centerX - x) / 20;


        room.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    room.addEventListener("mouseleave", function() {

        room.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});
/* =========================
   LOGIC ROOM
========================= */

const logicRoom = document.getElementById("logic-room");

const logicScreen = document.getElementById("logic-screen");

const closeLogic = document.getElementById("close-logic");


/* OPEN LOGIC ROOM */

logicRoom.addEventListener("click", function () {

    logicScreen.classList.add("active");

});


/* CLOSE LOGIC ROOM */

closeLogic.addEventListener("click", function () {

    logicScreen.classList.remove("active");

});
/* =========================
   CREATIVE ROOM
========================= */

const creativeRoom = document.getElementById("creative-room");

const creativeScreen = document.getElementById("creative-screen");

const closeCreative = document.getElementById("close-creative");


/* OPEN CREATIVE ROOM */

creativeRoom.addEventListener("click", function () {

    creativeScreen.classList.add("active");

});


/* CLOSE CREATIVE ROOM */

closeCreative.addEventListener("click", function () {

    creativeScreen.classList.remove("active");

});
/* =========================
   EXPERIMENT LAB
========================= */

const experimentRoom =
    document.getElementById("experiment-room");

const experimentScreen =
    document.getElementById("experiment-screen");

const closeExperiment =
    document.getElementById("close-experiment");


/* OPEN */

experimentRoom.addEventListener("click", function () {

    experimentScreen.classList.add("active");

});


/* CLOSE */

closeExperiment.addEventListener("click", function () {

    experimentScreen.classList.remove("active");

});
/* =========================
   THE OTHER SIDE
========================= */

const otherRoom =
    document.getElementById("other-room");

const otherScreen =
    document.getElementById("other-screen");

const closeOther =
    document.getElementById("close-other");


/* OPEN */

otherRoom.addEventListener("click", function () {

    otherScreen.classList.add("active");

});


/* CLOSE */

closeOther.addEventListener("click", function () {

    otherScreen.classList.remove("active");

});
/* =========================
   CODE CLASH PROJECT
========================= */

const codeClashProject =
    document.getElementById("code-clash-project");

const projectScreen =
    document.getElementById("project-screen");

const closeProject =
    document.getElementById("close-project");


/* OPEN PROJECT */

codeClashProject.addEventListener("click", function () {

    projectScreen.classList.add("active");

});


/* CLOSE PROJECT */

closeProject.addEventListener("click", function () {

    projectScreen.classList.remove("active");

});
/* =========================
   DESIGN PRACTICE
========================= */

const designPracticeProject =
    document.getElementById("design-practice-project");

const designPracticeScreen =
    document.getElementById("design-practice-screen");

const closeDesignPractice =
    document.getElementById("close-design-practice");


/* OPEN */

designPracticeProject.addEventListener("click", function () {

    designPracticeScreen.classList.add("active");

});


/* CLOSE */

closeDesignPractice.addEventListener("click", function () {

    designPracticeScreen.classList.remove("active");

});
/* =========================
   UI / UX LAB
========================= */

const uiuxProject =
    document.getElementById("uiux-project");

const uiuxScreen =
    document.getElementById("uiux-screen");

const closeUiux =
    document.getElementById("close-uiux");


/* OPEN */

uiuxProject.addEventListener("click", function () {

    uiuxScreen.classList.add("active");

});


/* CLOSE */

closeUiux.addEventListener("click", function () {

    uiuxScreen.classList.remove("active");

});
uiuxProject.addEventListener("click", function () {

    uiuxScreen.classList.add("active");

    uiuxScreen.scrollTop = 0;

});

/* =========================================
   PERSONAL UI CASE STUDY
========================================= */

const personalUIItem =
    document.querySelector(".interface-item");

const personalUICase =
    document.getElementById("personal-ui-case");

const closePersonalUI =
    document.getElementById("close-personal-ui");


/* OPEN CASE STUDY */

personalUIItem.addEventListener("click", function () {

    personalUICase.classList.add("active");

    personalUICase.scrollTop = 0;

});


/* CLOSE CASE STUDY */

closePersonalUI.addEventListener("click", function () {

    personalUICase.classList.remove("active");

});

/* =========================================
   MAKEUP UI — DETAIL VIEW
========================================= */

const makeupDesign =
    document.querySelectorAll(".uiux-design")[0];

const makeupDetail =
    document.getElementById("makeup-detail");

const closeMakeup =
    document.getElementById("close-makeup");


/* OPEN */

makeupDesign.addEventListener("click", function () {

    makeupDetail.classList.add("active");

    makeupDetail.scrollTop = 0;

});


/* CLOSE */

closeMakeup.addEventListener("click", function () {

    makeupDetail.classList.remove("active");

});

/* =========================================
   THE WORKSHOP — DETAIL VIEW
========================================= */

const workshopDesign =
    document.querySelectorAll(".uiux-design")[1];

const workshopDetail =
    document.getElementById("workshop-detail");

const closeWorkshop =
    document.getElementById("close-workshop");


/* OPEN */

workshopDesign.addEventListener("click", function () {

    workshopDetail.classList.add("active");

    workshopDetail.scrollTop = 0;

});


/* CLOSE */

closeWorkshop.addEventListener("click", function () {

    workshopDetail.classList.remove("active");

});

/* =========================================
   NOTIFICATIONS — DETAIL VIEW
========================================= */

const notificationsDesign =
    document.querySelectorAll(".uiux-design")[2];

const notificationsDetail =
    document.getElementById("notifications-detail");

const closeNotifications =
    document.getElementById("close-notifications");


/* OPEN */

notificationsDesign.addEventListener("click", function () {

    notificationsDetail.classList.add("active");

    notificationsDetail.scrollTop = 0;

});


/* CLOSE */

closeNotifications.addEventListener("click", function () {

    notificationsDetail.classList.remove("active");

});

/* =========================================
   CASE STUDY NAVIGATION
========================================= */


/* PROJECT ELEMENTS */

const makeup =
    document.getElementById("makeup-detail");

const workshop =
    document.getElementById("workshop-detail");

const notifications =
    document.getElementById("notifications-detail");


/* BUTTONS */

const nextWorkshop =
    document.getElementById("next-to-workshop");

const backMakeup =
    document.getElementById("back-to-makeup");

const nextNotifications =
    document.getElementById("next-to-notifications");

const backWorkshop =
    document.getElementById("back-to-workshop");


/* MAKEUP → WORKSHOP */

nextWorkshop.addEventListener("click", function () {

    makeup.classList.remove("active");

    workshop.classList.add("active");

    workshop.scrollTop = 0;

});


/* WORKSHOP → MAKEUP */

backMakeup.addEventListener("click", function () {

    workshop.classList.remove("active");

    makeup.classList.add("active");

    makeup.scrollTop = 0;

});


/* WORKSHOP → NOTIFICATIONS */

nextNotifications.addEventListener("click", function () {

    workshop.classList.remove("active");

    notifications.classList.add("active");

    notifications.scrollTop = 0;

});


/* NOTIFICATIONS → WORKSHOP */

backWorkshop.addEventListener("click", function () {

    notifications.classList.remove("active");

    workshop.classList.add("active");

    workshop.scrollTop = 0;

});

const projectData = {

    "01": {
        title: "KBC GAME",

        description:
            "A Python-based quiz game exploring conditions, user input and program flow.",

        tech:
            "Python · Logic · CLI",

        focus:
            "Python Development",

        about:
            "A console-based quiz game inspired by the KBC format, built to practice programming logic, conditions and user interaction.",

        built:
            "Python · Conditional Statements · User Input · Program Flow",

        github:
            "https://github.com/KHUSHI0ME/Python/tree/main"
    },


    "02": {
        title: "MEDICAL INSURANCE COST PREDICTION",

        description:
            "A machine learning data analysis and preprocessing project focused on understanding the factors that influence medical insurance charges.",

        tech:
            "Python · Pandas · NumPy · Scikit-learn",

        focus:
            "Data Science · Machine Learning",

        about:
            "Analyzes medical insurance data to identify important factors such as age, BMI, smoking status and region that influence insurance charges.",

        built:
            "Pandas · NumPy · Matplotlib · Seaborn · SciPy · Scikit-learn",

        github:
            "https://github.com/KHUSHI0ME/Machine-Learning-Project-1"
    },


    "03": {
        title: "LIBRARY MANAGEMENT SYSTEM",

        description:
            "A console-based Library Management System designed to manage books, members and loans.",

        tech:
            "Python · OOP · JSON",

        focus:
            "Software Development",

        about:
            "Allows users to add and search books, register members, issue and return books, track due dates and calculate overdue fines.",

        built:
            "Python · OOP · JSON File Storage · CLI",

        github:
            "https://github.com/KHUSHI0ME/Library-Management-System-Project"
    },


    "04": {
        title: "SKILLFORGE AI",

        description:
            "An AI-powered learning platform designed to help students move from learning concepts to actually building projects.",

        tech:
            "AI · Python · Web · RAG",

        focus:
            "Generative AI · EdTech",

        about:
            "SkillForge AI acts as a personal AI mentor by generating learning roadmaps, explaining concepts, reviewing code, answering questions from study material and helping students prepare for projects and interviews.",

        built:
            "HTML · CSS · JavaScript · Python · AI/LLM · RAG · Vector Database",

        github:
            "https://github.com/KHUSHI0ME/SkillForge-AI-/tree/main"
    },


    "05": {
        title: "FACE DETECTION",

        description:
            "A Python-based face detection tool that identifies human faces in images and live webcam video.",

        tech:
            "Python · OpenCV · NumPy",

        focus:
            "Computer Vision",

        about:
            "Detects human faces in images and live webcam video and draws a bounding box around each detected face in real time.",

        built:
            "Python · OpenCV · Haar Cascade Classifier · NumPy",

        github:
            "https://github.com/KHUSHI0ME/Face-Detection-Python-project-"
    }

};

/* =========================================
   PROJECT CASE STUDY SYSTEM
========================================= */

const projectCards =
    document.querySelectorAll(".logic-project");

const caseStudyScreen =
    document.getElementById("case-study-screen");

const closeCaseStudy =
    document.getElementById("close-case-study");


projectCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const projectNumber =
            card.dataset.project;

        const project =
            projectData[projectNumber];

        if (!project) {
            console.log("Project not found:", projectNumber);
            return;
        }


        document.getElementById("case-number").textContent =
            projectNumber;

        document.getElementById("case-title").textContent =
            project.title;

        document.getElementById("case-description").textContent =
            project.description;

        document.getElementById("case-tech").textContent =
            project.tech;

        document.getElementById("case-focus").textContent =
            project.focus;

        document.getElementById("case-about").textContent =
            project.about;

        document.getElementById("case-built").textContent =
            project.built;


        const githubButton =
            document.getElementById("case-github");

        githubButton.href =
            project.github;


        caseStudyScreen.classList.add("active");

        caseStudyScreen.scrollTop = 0;

    });

});


/* =========================================
   CLOSE CASE STUDY
========================================= */

closeCaseStudy.addEventListener("click", function() {

    caseStudyScreen.classList.remove("active");

});

/* =========================================
   VISUAL STORIES — STORY VIEWER
========================================= */

const storyCards =
    document.querySelectorAll(".story-card");

const storyViewer =
    document.getElementById("story-viewer");

const closeStory =
    document.getElementById("close-story");

const viewerNumber =
    document.getElementById("viewer-number");

const viewerTitle =
    document.getElementById("viewer-title");

const viewerDescription =
    document.getElementById("viewer-description");

const viewerImage =
    document.getElementById("viewer-image");


storyCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const image =
            card.querySelector(".story-image img");

        const number =
            card.querySelector(".story-info span");

        const title =
            card.querySelector(".story-info h4");

        const description =
            card.querySelector(".story-info p");


        viewerNumber.textContent =
            number.textContent;

        viewerTitle.textContent =
            title.textContent;

        viewerDescription.textContent =
            description.textContent;

        viewerImage.src =
            image.src;

        viewerImage.alt =
            image.alt;


        storyViewer.classList.add("active");

        storyViewer.scrollTop = 0;

    });

});


/* =========================================
   CLOSE STORY
========================================= */

closeStory.addEventListener("click", function() {

    storyViewer.classList.remove("active");

});

/* =========================
   ROOM SCROLL REVEAL
========================= */

const roomObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.2
    }
);

rooms.forEach(function(room) {
    roomObserver.observe(room);
});

/* =========================
   UNIVERSE TITLE REVEAL
========================= */

const universeTitle =
    document.querySelector(".universe-title");

const universeObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.3
    }
);

universeObserver.observe(universeTitle);