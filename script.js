const top_bar_container = document.getElementById('top_bar_container');
const top_bars = document.getElementsByClassName("top_bar");
const name_button = document.getElementById('name');
const dropdown_container_buttons = document.getElementsByClassName("dropdown_button");
const career = document.getElementById('career_button');
const career_dropdown = document.getElementById('career_dropdown');
const career_dropdown_buttons = document.getElementsByClassName('below_career');
const contact = document.getElementById('contact_button');
const contact_dropdown_buttons = document.getElementsByClassName('below_contact');
const contact_dropdown = document.getElementById('contact_dropdown');
const about = document.getElementById('about_button');
const about_dropdown = document.getElementById('about_dropdown');
const about_dropdown_buttons = document.getElementsByClassName('below_about');





const bg_image_container = document.getElementById('bg_image_container');
const bg_image = document.getElementById('bg_image');
const bg_void = document.getElementById('bg_void');

const main_container = document.getElementById('main_buttons_container');
const main_buttons = document.getElementsByClassName("main_button")
const projects = document.getElementById('projects');
const research = document.getElementById('research');
const publications = document.getElementById('publications');
const gallery = document.getElementById('gallery');

const project_column = document.getElementById('project_column');
const project_column_elements = document.getElementsByClassName("project_column_element");


// Scroll animation
const main_button_container_extend = 562; 

// Home button functionality
name_button.onmouseover = function() {
    nameButtonHover(this);
};

name_button.onmouseleave = function() {
    nameButtonUnhover(this);
};

name_button.onclick = function() {
    nameButtonClick(this);
};

function nameButtonHover(self) {

    // Animate the button to grow and set text color to white
    self.style.transition = "transform 0.2s ease-out, color 0.2s ease-in, background-color 0.2s ease-in";
    self.style.transform = `scale(1.1)`;
    self.style.color = "rgb(7, 66, 72)";
    self.style.backgroundColor = "rgb(129, 233, 245)";
}

function nameButtonUnhover(self) {

    // Animate the button to grow and set text color to white
    self.style.transition = "transform 0.2s ease-out, color 0.2s ease-in, background-color 0.2s ease-in";
    self.style.transform = `scale(1)`;
    self.style.color = "white";
    self.style.backgroundColor = "#0097a7ff";

    // Shrink the button back down
    self.style.transform = "scale(1)";
}


function nameButtonClick (self) {
    // To-do
    location.href='index.html'
    }

// Top Bar Functionality // 
var current_dropdown_button;

// Map window events to Functions
for (let i = 0; i < dropdown_container_buttons.length; i++) {
    dropdown_container_buttons[i].onmouseover = function() {
        dropdownButtonHover(this);
    };

    dropdown_container_buttons[i].onmouseleave = function() {
        dropdownButtonUnhover(this);
    };

    dropdown_container_buttons[i].onclick = function() {
        dropdownButtonClick(this);
    }
} 

function extend(top_type) {

    // Get the dropdow buttons pertaining to the top-bar button clicked
    let dropdown_buttons;
    switch (top_type.innerText) {
        case "Career":
            dropdown_buttons = career_dropdown_buttons;
            break;
        case "Contact":
            dropdown_buttons = contact_dropdown_buttons;
            break;
        // case "About Me":
        //     dropdown_buttons = about_dropdown_buttons;
        //     break;
    }

    for (let i = 0; i < dropdown_buttons.length; i++) {
        dropdown_buttons[i].style.display = "inline";
        dropdown_buttons[i].style.zIndex = 9-i;

        // Slide down
        setTimeout(() => {
            dropdown_buttons[i].animate({
                transform: `translate(0, ${40 * (i + 1)}px)`,
            }, {
                easing: `cubic-bezier(0.45, 1.5, 0.25, 1)`,
                fill: "forwards",
                duration: 500
            });
        }, i * 50);
    }
}

        // Initiate IEFE (immediately-invoked function expression) function-scope to allow "animation" to be a local variable and not be overwritten
        // Note, don't do this unless I take the time to fix the display:none timing with animation listeners
//         (function(button, index) {
//             setTimeout(() => {
//                 console.log(index);
//                 let animation = button.animate({
//                     transform: `translate(0, ${40 * (index + 1)}px)`
//                 }, {
//                     easing: `ease-out`,
//                     fill: "forwards",
//                     duration: 400
//                 });

//                 // Add event listener to hide the button when animation ends
//                 animation.onfinish = () => {
//                     button.style.display = 'inline';
//                 };
//             }, (index * 50));
//         })(dropdown_buttons[i], i);
2
function retract(top_type) {

    // Get the dropdow buttons pertaining to the top-bar button clicked
    let dropdown_buttons;
    switch (top_type.innerText) {
        case "Career":
            dropdown_buttons = career_dropdown_buttons;
            break;
        case "Contact":
            dropdown_buttons = contact_dropdown_buttons;
            break;
        // case "About Me":
        //     dropdown_buttons = about_dropdown_buttons;
        //     break;
    }

    for (let i = dropdown_buttons.length-1; i > -1; i--) {
        dropdown_buttons[i].style.display = "inline";
        dropdown_buttons[i].style.zIndex = 9-i;

        // Slide back up
        setTimeout(() => {
            dropdown_buttons[i].animate({
                transform: `translate(0, ${0}px)`,
            }, {
                easing: `ease-out`,
                fill: "forwards",
                duration: 225
            });
        }, (dropdown_buttons.length - i) * 50);
    }
}


function dropdownButtonHover(self) {

    // Move the hovered button above the rest
    switch(self.innerText) {
        case "Career":
            career_dropdown.style.zIndex = 70;
            break;
        case "Contact":
            contact_dropdown.style.zIndex = 70;
            break;
        // case "About Me":
        //     about_dropdown.style.zIndex = 70;
        //     break;
    }

    // Animate the button to grow and set text color to white
    self.style.transition = "transform 0.2s ease-out, color 0.2s ease-in, background-color 0.2s ease-in";
    self.style.transform = `scale(1.1)`;
    self.style.color = "rgb(7, 66, 72)";
    self.style.backgroundColor = "rgb(129, 233, 245)";
}

function dropdownButtonUnhover(self) {

    // Move the hovered button back below the rest
    switch(self.innerText) {
        case "Career":
            career_dropdown.style.zIndex = 69;
            break;
        case "Contact":
            contact_dropdown.style.zIndex = 69;
            break;
        // case "About Me":
        //     about_dropdown.style.zIndex = 69;
        //     break;
    }

    if (self != current_dropdown_button) {
        // Animate the button to grow and set text color to white
        self.style.transition = "transform 0.2s ease-out, color 0.2s ease-in, background-color 0.2s ease-in";
        self.style.transform = `scale(1)`;
        self.style.color = "white";
        self.style.backgroundColor = "#0097a7ff";
    } else {
        self.style.color = "rgb(251, 229, 120)";
        self.style.backgroundColor = "rgb(0, 185, 205)";
    }

    // Shrink the button back down
    self.style.transform = "scale(1)";
}


function dropdownButtonClick (self) {

    // Unhighlight old button
    if (current_dropdown_button != undefined) {
        self.style.transition = "transform 0.4s ease-out, color 0.17s ease-in, font-size 0.3s ease-in, background-color 0.17s ease-in, border-color 0.17s ease-in";
        current_dropdown_button.style.backgroundColor = "#0097a7ff";
        current_dropdown_button.style.color = "white";
        retract(current_dropdown_button);
    }
    
    if (current_dropdown_button != self) {
        // Update the current image to reflect the button
        current_dropdown_button = self;
        extend(self);
        
        // Highlight clicked button
        self.style.transition = "transform 0.4s ease-out, color 0.17s ease-in, font-size 0.3s ease-in, background-color 0.17s ease-in, border-color 0.17s ease-in";
        self.style.color = "rgb(251, 229, 120)";
        self.style.backgroundColor = "rgb(0, 185, 205)";
    }
    else {
        retract(current_dropdown_button);
        // TO-DO: If the same main button is clicked, pack up the page
        // 💀 did I do this already 
        current_dropdown_button = undefined;
    }
}



// BG_Image Functionality // 

var current_bg_image = "bg-images/sluggo.png";
var current_bg_button;
var hoveredButtons = new Set();
var hovering = 0;

window.onload = e => {
    bg_image.src="bg-images/sluggo.png";
}

function changeBgImageClick(button_type) {

    switch(button_type) {
        case projects:
            current_bg_image = "bg-images/manarola.png";
            current_bg_button = projects;
            break;
        case research:
            current_bg_image = "bg-images/rome.png";
            current_bg_button = research;
            break;
        case publications:
            current_bg_image = "bg-images/muirhut.png";
            current_bg_button = publications;
            break;
        case gallery:
            current_bg_image = "bg-images/forest.png";
            current_bg_button = gallery;
            break;
        default:
            console.log("Error, no button found");
    }
}

async function loadNewBgImage(button_type) {
   
    return new Promise((resolve, reject) => {
        let new_src;
        switch(button_type) {
            case projects:
                new_src="bg-images/manarola.png";
                break;
            case research:
                new_src="bg-images/rome.png";
                break;
            case publications:
                new_src="bg-images/muirhut.png";
                break;
            case gallery:
                new_src="bg-images/forest.png";
                break;
            default:
                reject("Error");
        }
        // Load the new image in cache
        let temp_img = new Image();
        temp_img.src = new_src;
        temp_img.onload = () => {
            resolve(new_src);
        };
    });
}


async function changeBgImageHover(button_type) {
   
    try {
        // Wait for the new image to load
        bg_image.src = await loadNewBgImage(button_type);
       
        // Start 20 pixels below the current placement
        bg_image.animate({
            transform: "translate(0, 20px) scale(0.95) rotate(0deg)", opacity: 0
        }, {
            duration: 0,
            fill: "forwards"
        });
    
        // Slide upwards into original place
        bg_image.animate({
            transform: "translate(0, 0px) scale(1) rotate(0deg)", opacity: 1
        }, {
            duration: 1500, 
            fill:"forwards",
            easing: "ease-out"
        });

    } catch(error) {
        console.log("New image did not load");
    }
}

function releaseBgImage() {

    // If no button is being hovered, revert the BG image to default, or most-recently clicked
    if (hover == 0) {
        bg_image.src = current_bg_image;

        // Kill transition animation -- Do I really want this?
        let bg_animation = bg_image.getAnimations();
        // bg_animation.forEach(animation => animation.cancel());    
    }
}

// Main_Buttons Functionality
var offset = -10;

CustomEase.create("customBackOut", "0.24, 1.1, 0.44, 1");


// Map window events to Functions
for (let i = 0; i < main_buttons.length; i++) {
    main_buttons[i].onmouseover = function() {
        mainButtonHover(this);
    };

    main_buttons[i].onmouseleave = function() {
        mainButtonUnhover(this);
    };

    main_buttons[i].onclick = function() {
        mainButtonClick(this);
    }
} 


function mainButtonHover(self) {
    // Denote a button is being hovered (for release)

    hover = 1;

    // Move the hovered button above the rest
    self.style.zIndex = 60;

    // Animate the button to grow and set text color to white
    self.style.transition = "transform 0.4s ease-out, color 0.17s ease-in, font-size 0.3s ease-in, background-color 0.17s ease-in";
    self.style.transform = `scale(1.1) translate(0px, ${offset}px)`;
    // self.style.color = "rgb(73, 0, 19)";
    self.style.backgroundColor = "rgb(239, 211, 180)";
    self.style.fontSize = "1.17em";


    // Change the Bg Image to reflect the button
    if (self !== current_bg_button) {
        changeBgImageHover(self);
    } else {
        // Cancel any ongoing animations on the background image
        let bg_animation = bg_image.getAnimations();
        bg_image.src = current_bg_image;
    }
}


function mainButtonUnhover (self) {

    // Move the button back down
    self.style.zIndex = 50;


    // Revert Button Color -- if not clicked
    if (current_bg_button != self) {
        self.style.transition = "transform 0.4s ease-out, color 0.8s ease-in, background-color 0.4s ease-in"
        self.style.backgroundColor = "#ece3d9ff";
        self.style.color = "#0e0e0eff";
        self.style.fontSize = "1.2em";
    }

    // Shrink the button back down
    self.style.transform = "scale(1)";

    // Release the background image after 5000ms
    setTimeout(releaseBgImage, 1);

    // Note end hovering for Release
    hover = 0;
}

function mainButtonClick (self) {

    // Unhighlight old button
    if (current_bg_button != undefined) {
        current_bg_button.style.backgroundColor = "#ece3d9ff";
        current_bg_button.style.color = "#0e0e0eff";
        current_bg_button.style.fontSize = "1.2em";
    }


    
    
    if (current_bg_button != self) {
        // Scroll to show options
        gsap.to(window, {
            scrollTo: { y: main_button_container_extend, autoKill: true },
            duration: 2, // Duration of 1 second
            ease: "customBackOut" // Ease out effect
        });

        switch (self.innerText) {
            case "Projects":
                showProjects();
                break;
            case "Research":
                break;
    
            case "Publications":
                break;
    
            case "Gallery":
                break;
        }

        // Update the current image to reflect the button
        changeBgImageClick(self);
        
        // Highlight clicked button
        self.style.transition = "transform 0.4s ease-out, color 0.17s ease-in, font-size 0.3s ease-in, background-color 0.17s ease-in, border-color 0.17s ease-in";
        self.style.color = "rgb(73, 0, 19)";
        self.style.backgroundColor = "rgb(239, 211, 180)";
        self.style.fontSize = "1.27em";
        self.style.borderColor = "green green green green;";
    }
    else {
        // TO-DO: If the same main button is clicked, pack up the page
        gsap.to(window, {
            scrollTo: { y: 0, autoKill: false },
            duration: 2, // Duration of 1 second
            ease: "customBackOut" // Ease out effect
        });
        switch (self.innerText) {
            case "Projects":
                recallProjects();
                break;
            case "Research":
                break;
    
            case "Publications":
                break;
    
            case "Gallery":
                break;
        }

        current_bg_button = undefined;
    }
}

window.onwheel = e => {
    let depth = window.scrollY;
    let new_main_button_height;

    // Shrink/Grow the Main Buttons with relation to scroll
    if (depth > 512) {
        offset = 5;
        main_container.style.height='40px';
        // bg_image.style.visibility='hidden';
    } else if (depth == 0) {
        offset = -10;
        main_container.style.height='70px';
    } else {
        new_main_button_height = 70 - (depth/(256/15));
        offset = -10 - (depth/(-512/15));
        main_container.style.height=`${new_main_button_height}px`;
        // bg_image.style.visibility='visible';
    }
}


// Projects Page
function showProjects() {

    project_column.style.display = 'grid';
   // Animate opacity from 0 to 1 over 2 seconds
    project_column.animate([
        { opacity: 0 },  // Start with opacity 0
        { opacity: 1 }   // End with opacity 1
    ], {
        easing: 'ease-out',  // Smooth transition effect
        fill: 'forwards',    // Retain final state after animation
        duration: 1000       // 2 seconds duration
    });
}

function recallProjects() {
    project_column.style.display = 'grid';  // Ensure the element is visible
    console.log("hello?");
    
    // Create the animation
    const animation = project_column.animate([
        { opacity: 1 },  // Start with opacity 1
        { opacity: 0 }   // End with opacity 0
    ], {
        easing: 'ease-out',  // Smooth transition effect
        fill: 'forwards',    // Retain final state after animation
        duration: 2000       // 2 seconds duration
    });

    // Set the element to display: none after animation ends
    animation.onfinish = () => {
        project_column.style.display = 'none';
    };
}

// Gallery Redirect
document.getElementById("gallery").addEventListener("click", function() {
    if (window.top != window) {
        window.top.location = "index.html";
    } else {
        window.location.href = "index.html";
    }
    window.open("https://aidanjmaldonado.github.io/aidanjmphotos.github.io/", "_self");
});

// Publications Redirect
document.getElementById("publications").addEventListener("click", function() {
    if (window.top != window) {
        window.top.location = "index.html";
    } else {
        window.location.href = "index.html";
    }
    window.open("https://aidanjmaldonado.github.io/writing/index.html", "_self");
});

// About Me
document.getElementById("about_button").addEventListener("click", function () {
    document.getElementById("about_modal").style.display = "flex";
});

// Close modal function
function closeAboutModal() {
    document.getElementById("about_modal").style.display = "none";
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeAboutModal();
    }
});
