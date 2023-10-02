// Advanced UI elements
import { selfIntroFade } from "./helper/UI/selfintro-fade.js";
import { mainMenuFade } from "./helper/UI/mainmenu.js";
import { contactInfoFade } from "./helper/UI/contactinfo.js";
import { fiberLampFade } from "./helper/UI/fiberlamp-fade.js";
import { backToHomepage } from "./helper/UI/back-button.js";

// Other helper functions
import { delay } from "./helper/delay.js";
import { isMobile } from "./helper/mobileCheck.js";
import { getDeviceOrientation } from "./helper/orientationMode.js";
import { gpuEnabled } from "./helper/gpu-detect.js";

//---------------------------------------------------------------------------------------- About Me click handle
if (isMobile()) {
document.getElementById("about-me").addEventListener("click", async function() { 
    let delayer;

    // Enable back button to allow visitors to go back
    document.getElementById("back-button").style.pointerEvents = "auto";
    document.getElementById("back-button").style.display = "block";

    // Hide main page
    selfIntroFade(10,"Out");
    mainMenuFade(10,"Out");

    // Move lamp to side 
    if (gpuEnabled()) {
        document.getElementById("fiber-lamp").style.transition = "2s";
        document.getElementById("fiber-lamp").style.paddingRight = "90vw";
        document.getElementById("fiber-lamp").style.opacity = "0";
    }
    else {
        document.getElementById("fiber-lamp-lite").style.left = "-100%";
        document.getElementById("fiber-lamp-lite").style.opacity = "0";
    }
    
    // Show About Me
    document.getElementById("aboutme-page1-background").style.opacity= "1";
    if (!gpuEnabled()) {
        delayer = await delay(900);
    }
    document.getElementById("aboutme").style.transition = "2s";
    document.getElementById("aboutme").style.opacity= "1";

    // Make page interactable
    document.getElementById("aboutme").style.pointerEvents = "auto";

    // Make page scrollable
    document.getElementsByTagName('body')[0].style.overflowY = "auto";
    document.getElementById('aboutme-page-bottom').style.top = "1750px";

    // Show stars
    delayer = await delay(500);
    document.getElementById("stars-bg-purple").style.visibility = "visible";
    document.getElementById("stars-bg-purple").style.opacity = "50%";

    //---------------------------------------------------------------------------------------- Back button function
    document.getElementById("back-button").addEventListener("click", async function backButton() {
        let delayer;
        
        // Hide about me page
        document.getElementById("aboutme-page1-background").style.opacity= "0";
        //delayer = await delay(500);
        document.getElementById("aboutme-page1").style.opacity= "1";
        document.getElementById("aboutme").style.transition = "1s";
        document.getElementById("aboutme").style.opacity= "0";

        // Disable page interaction
        document.getElementById("aboutme").style.pointerEvents = "none";
        
        // Make page unscrollable
        window.scrollTo(0,0);
        document.getElementsByTagName('body')[0].style.overflowY = "hidden";
        document.getElementById('aboutme-page-bottom').style.top = "0px";

        // Hide stars
        document.getElementById("stars-bg-purple").style.opacity = "0%";
        //delayer = await delay(3000); document.getElementById("stars-bg").style.visibility = "hidden";

        // Show homepage
        if (!gpuEnabled()) {
            backToHomepage(800);
        } else {
            backToHomepage(1);
        }        

        // Remove back buttom function on click to prevent function overlaps
        document.getElementById("back-button").removeEventListener("click", backButton);
 
    })
})

}
//---------------------------------------------------------------------------------------- Mobile layout
if (isMobile()) {
    // Initially check user's device orientation, change stylesheet accordingly
    var device_orientation = getDeviceOrientation(false);

    if (device_orientation == "portrait") {
        toggleMobileLayout_AboutMe(true);
    }
    else {
        toggleMobileLayout_AboutMe(false);
    };

    // Continue to listen for user's device orientation, change stylesheet accordingly
    window.addEventListener('orientationchange', () => {
        var device_orientation = getDeviceOrientation(false);

        if (device_orientation == "portrait") {
            toggleMobileLayout_AboutMe(true);
        }
        else {
            toggleMobileLayout_AboutMe(false);
        };
    });
}

function toggleMobileLayout_AboutMe(mode_) {
    if (mode_ == true) {
        document.getElementById("aboutme-style").setAttribute("href", "style/aboutme-mobile.css");
    }
    else {
        document.getElementById("aboutme-style").setAttribute("href", "style/aboutme.css");
    }
}




//---------------------------------------------------------------------------------------- To page 1
/*
document.getElementById("to-page1").addEventListener("click", async function() {
    // Hide page 2 and disable interaction on it
    document.getElementById("aboutme-page2").style.transition = "1s";
    document.getElementById("aboutme-page2").style.opacity= "0";
    document.getElementById("aboutme-page2").style.pointerEvents = "none";

    // Show page 1 and enable interaction on it
    document.getElementById("aboutme-page1").style.transition = "1s";
    document.getElementById("aboutme-page1").style.opacity= "1";
    document.getElementById("aboutme-page1").style.pointerEvents = "auto";

    document.getElementById("aboutme-page1-selfie").style.transition = "1s";
    document.getElementById("aboutme-page1-selfie").style.left = "5vw";

    document.getElementById("aboutme-page1-info").style.transition = "1s";
    document.getElementById("aboutme-page1-info").style.top = "22vh";
    
})
*/

//---------------------------------------------------------------------------------------- To page 2
/*
document.getElementById("to-page2").addEventListener("click", async function() {
    // Hide page 1 and disable interaction on it
    document.getElementById("aboutme-page1").style.transition = "1s";
    document.getElementById("aboutme-page1").style.opacity= "0";
    document.getElementById("aboutme-page1").style.pointerEvents = "none";

    document.getElementById("aboutme-page1-selfie").style.transition = "1s";
    document.getElementById("aboutme-page1-selfie").style.left = "-20vw";

    document.getElementById("aboutme-page1-info").style.transition = "1s";
    document.getElementById("aboutme-page1-info").style.top = "-22vh";

    // Show page 2 and enable interaction on it
    document.getElementById("aboutme-page2").style.transition = "1s";
    document.getElementById("aboutme-page2").style.opacity= "1";
    document.getElementById("aboutme-page2").style.pointerEvents = "auto";
})
*/

//---------------------------------------------------------------------------------------- Parallax effect
/*
document.addEventListener("mousemove", parallax);

function parallax(e) {
    var moving_value_background = document.getElementById("aboutme-page2-background").getAttribute("depth");
    var x_background = (e.clientX * moving_value_background) / 250;
    var y_background = (e.clientY * moving_value_background) / 250;

    document.getElementById("aboutme-page1-background").style.transform = "translateX(" + x_background + "px) translateY(" + y_background + "px) scale(1.1)";
    document.getElementById("aboutme-page2-background").style.transform = "translateX(" + x_background + "px) translateY(" + y_background + "px) scale(1.1)";
}
*/