// Advanced UI elements
import { selfIntroFade } from "./helper/UI/selfintro-fade.js";
import { mainMenuFade } from "./helper/UI/mainmenu-fade.js";
import { contactInfoFade } from "./helper/UI/contactinfo-fade.js";
import { fiberLampFade } from "./helper/UI/fiberlamp-fade.js";

// Other helpful functions
import { delay } from "./helper/delay.js";
import { isMobile } from "./helper/mobileCheck.js";
import { getDeviceOrientation } from "./helper/orientationMode.js";


//---------------------------------------------------------------------------------------- My Blogs click handle
document.getElementById("blogs").addEventListener("click", async function() {

    // Enable back button to allow visitors to go back
    document.getElementById("back-button").style.pointerEvents = "auto";
    document.getElementById("back-button").style.display = "block";

    // Hide main page
    selfIntroFade(10,"Out");
    mainMenuFade(10,"Out");

    // Move lamp aside
    document.getElementById("fiber-lamp").style.transition = "1.9s";
    document.getElementById("fiber-lamp").style.paddingRight = "90vw"; 

    // Show blogs
    document.getElementById('blog-background').style.opacity = "7%";
    //document.getElementById('no-blog').style.opacity = "100%";
    document.getElementById('blog-container').style.opacity = "100%";
    loadBlogs();

    // Show stars
    let delayer = await delay(500);
    document.getElementById("stars-bg").style.visibility = "visible";
    document.getElementById("stars-bg").style.opacity = "50%";

    // Make page scrollable
    if (isMobile()) {
        document.getElementsByTagName('body')[0].style.overflowY = "auto";
    }

    //---------------------------------------------------------------------------------------- Back button function
    document.getElementById("back-button").addEventListener("click", async function backButton() {
        let delayer;

        // Make page unscrollable
        window.scrollTo(0,0);
        document.getElementsByTagName('body')[0].style.overflowY = "hidden";

        // Hide blogs
        document.getElementById('blog-background').style.opacity = "0%";
        //document.getElementById('no-blog').style.opacity = "0%";
        document.getElementById('blog-container').style.opacity = "0%";

        // Hide stars
        delayer = await delay(500);
        document.getElementById("stars-bg").style.opacity = "0%";
        //delayer = await delay(3000); document.getElementById("stars-bg").style.visibility = "hidden";

        // 
        //delayer = await delay(1000);

        // Remove back buttom function on click to prevent function overlaps
        document.getElementById("back-button").removeEventListener("click", backButton);
    })
})

//---------------------------------------------------------------------------------------- Load blogs from data repository
let blogsTotal = 2; // Set when you add a blog in https://github.com/JiayuanWen/JiayuanWen.github.io.data
async function loadBlogs() {
    let blogI = 1;
    // Blog images and descriptions hosted on https://github.com/JiayuanWen/JiayuanWen.github.io.data
    let filePath = `https://raw.githubusercontent.com/JiayuanWen/JiayuanWen.github.io.data/main/blogs/blog${blogI}/preview.html`;

    let blogDiv;

    for (let i = 1; i <= blogsTotal; i++) {
        blogI = i;
        // Blog images and descriptions hosted on https://github.com/JiayuanWen/JiayuanWen.github.io.data
        filePath = `https://raw.githubusercontent.com/JiayuanWen/JiayuanWen.github.io.data/main/blogs/blog${blogI}/preview.html`;

        // Create blog element
        blogDiv = document.createElement('div');
        blogDiv.setAttribute('id',`blog-${blogI}`);

        // Insert blog element to container
        document.getElementById("blog-container").insertAdjacentHTML('beforeend',blogDiv.outerHTML);

        // Load blog from https://github.com/JiayuanWen/JiayuanWen.github.io.data
        $(`#blog-${blogI}`).load(filePath);
    }
}


//---------------------------------------------------------------------------------------- Mobile layout
if (isMobile()) {
    // Initially check user's device orientation, change stylesheet accordingly
    var device_orientation = getDeviceOrientation(false);

    if (device_orientation == "portrait") {
        toggleMobileLayout_MyBlogs(true);
    }
    else {
        toggleMobileLayout_MyBlogs(false);
    };

    // Continue to listen for user's device orientation, change stylesheet accordingly
    window.addEventListener('orientationchange', () => {
        var device_orientation = getDeviceOrientation(false);

        if (device_orientation == "portrait") {
            toggleMobileLayout_MyBlogs(true);
        }
        else {
            toggleMobileLayout_MyBlogs(false);
        };
    });
}

function toggleMobileLayout_MyBlogs(mode_) {
    if (mode_ == true) {
        document.getElementById("myproject-style").setAttribute("href", "style/myproject-mobile.css");
    }
    else {
        document.getElementById("myproject-style").setAttribute("href", "style/myproject.css");
    }
}