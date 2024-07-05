const top_bar_container = document.getElementById('top_bar_container');
const top_bars = document.getElementsByClassName("top_bar");
const name_button = document.getElementById('name');
const dropdown_container_buttons = document.getElementsByClassName("dropdown_button");
const skills = document.getElementById('skill_button');
const skill_dropdown = document.getElementById('skill_dropdown');
const contact = document.getElementById('contact_button');
const contact_dropdown = document.getElementById('contact_dropdown');
const about = document.getElementById('about_button');
const about_dropdown = document.getElementById('about_dropdown');


const bg_image_container = document.getElementById('bg_image_container');
const bg_image = document.getElementById('bg_image');
const bg_void = document.getElementById('bg_void');

const main_container = document.getElementById('main_buttons_container');
const main_buttons = document.getElementsByClassName("main_button")
const projects = document.getElementById('projects');
const research = document.getElementById('research');
const publications = document.getElementById('publications');
const gallery = document.getElementById('gallery');


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

    }

// Top Bar Functionality
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


function dropdownButtonHover(self) {
    // Denote a button is being hovered (for release)
    // hover = 1;

    // Move the hovered button above the rest
    switch(self.innerText) {
        case "Skill":
            skill_dropdown.style.zIndex = 6;
            break;
        case "Contact":
            contact_dropdown.style.zIndex = 6;
            break;
        case "About":
            about_dropdown.style.zIndex = 6;
            break;
    }

    // Animate the button to grow and set text color to white
    self.style.transition = "transform 0.2s ease-out, color 0.2s ease-in, background-color 0.2s ease-in";
    self.style.transform = `scale(1.1)`;
    self.style.color = "rgb(7, 66, 72)";
    self.style.backgroundColor = "rgb(129, 233, 245)";
}

function dropdownButtonUnhover(self) {
    // Denote a button is being hovered (for release)
    // hover = 1;

    // Move the hovered button back below the rest
    switch(self.innerText) {
        case "Skill":
            skill_dropdown.style.zIndex = 5;
            break;
        case "Contact":
            contact_dropdown.style.zIndex = 5;
            break;
        case "About":
            about_dropdown.style.zIndex = 5;
            break;
    }

    if (self != current_dropdown_button) {
        // Animate the button to grow and set text color to white
        self.style.transition = "transform 0.2s ease-out, color 0.2s ease-in, background-color 0.2s ease-in";
        self.style.transform = `scale(1)`;
        self.style.color = "white";
        self.style.backgroundColor = "#0097a7ff";
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
        
        // current_dropdown_button.style.fontSize = "1em";
    }

    
    
    if (current_dropdown_button != self) {
        // Update the current image to reflect the button
        current_dropdown_button = self; //REPLACE WITH FUNCITON
        
        // Highlight clicked button
        self.style.transition = "transform 0.4s ease-out, color 0.17s ease-in, font-size 0.3s ease-in, background-color 0.17s ease-in, border-color 0.17s ease-in";
        self.style.color = "rgb(251, 229, 120)";
        self.style.backgroundColor = "rgb(0, 185, 205)";
        // self.style.fontSize = "1.27em";
        // self.style.borderColor = "green green green green;";
    }
    else {
        // TO-DO: If the same main button is clicked, pack up the page
        current_dropdown_button = undefined;
    }
}



// BG_Image Functionality
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
    self.style.zIndex = 6;

    // Apply CSS transition for smooth color change and transformation
    // self.style.transition = "transform 0.4s ease-out, color 0.3s ease";

    // Animate the button to grow and set text color to white
    self.style.transition = "transform 0.4s ease-out, color 0.17s ease-in, font-size 0.3s ease-in, background-color 0.17s ease-in";
    self.style.transform = `scale(1.1) translate(0px, ${offset}px)`;
    // self.style.color = "rgb(73, 0, 19)";
    self.style.backgroundColor = "rgb(239, 211, 180)";
    self.style.fontSize = "1.27em";


    // Change the Bg Image to reflect the button
    if (self !== current_bg_button) {
        changeBgImageHover(self);
    } else {
        // Cancel any ongoing animations on the background image
        let bg_animation = bg_image.getAnimations();
        // bg_animation.forEach(animation => animation.cancel()); Do I really want this?
        bg_image.src = current_bg_image;
    }
}


function mainButtonUnhover (self) {

    // Move the button back down
    self.style.zIndex = 5;


    // Revert Button Color -- if not clicked
    if (current_bg_button != self) {
        self.style.transition = "transform 0.4s ease-out, color 0.8s ease-in, background-color 0.8s ease-in"
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
    } else if (depth == 0) {
        offset = -10;
        main_container.style.height='70px';
    } else {
        new_main_button_height = 70 - (depth/(256/15));
        offset = -10 - (depth/(-512/15));
        main_container.style.height=`${new_main_button_height}px`;
    }
}