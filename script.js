const top_bar_container = document.getElementById('top_bar_container');
const top_bars = document.getElementsByClassName("top_bar")
const dropdown_containers = document.getElementsByClassName("dropdown_container")
const name = document.getElementById('name');
const skills = document.getElementById('skills');
const contact = document.getElementById('contact');
const about = document.getElementById('about');

const bg_image_container = document.getElementById('bg_image_container');
const bg_image = document.getElementById('bg_image');
const bg_void = document.getElementById('bg_void');

const main_container = document.getElementById('main_buttons_container');
const main_buttons = document.getElementsByClassName("main_button")
const projects = document.getElementById('projects');
const research = document.getElementById('research');
const publications = document.getElementById('publications');
const gallery = document.getElementById('gallery');

// Top Bar Functionality


// BG_Image Functionality
var current_bg_image = "bg-images/sluggo.png";
var previous_bg_image = "bg-images/sluggo.png";
var current_bg_button;
var clicked = 0;
var button_hovering_a = 0;
var button_hovering_b = 0;
var hoveredButtons = new Set();


window.onload = e => {
    bg_image.src="bg-images/sluggo.png";
}

var current_animation;
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
                current_bg_image = "bg-images/manarola.png";
                break;
            case research:
                new_src="bg-images/rome.png";
                current_bg_image = "bg-images/rome.png";
                break;
            case publications:
                new_src="bg-images/muirhut.png";
                current_bg_image = "bg-images/muirhut.png";
                break;
            case gallery:
                new_src="bg-images/forest.png";
                current_bg_image = "bg-images/forest.png";
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


// Main_Buttons Functionality
var offset = -10;

// Assign window events to functions
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
main_container.onmouseover = () => {
    // console.log("IT's JOEVER");
}

// main_buttons.onmouseover="mainButtonHover(this)";
function mainButtonHover(self) {
    clicked = 0;
    button_hovering_a = 1;
    button_hovering_b = 1;
    console.log("button hover", button_hovering_a, button_hovering_b);
    // previous_bg_image = current_bg_image;
    current_animation = self.getAnimations();
    current_animation.forEach(animation => animation.cancel());


    // Move the hovered button above the rest
    self.style.zIndex = 6;

    // Animate the button to grow
    self.style.transform = `scale(1.1) translate(0px, ${offset}px)`;

    // Change the Bg Image to reflect the button
    if (self != current_bg_button) {
        changeBgImageHover(self);
    }
    hoveredButtons.add(self);
}

function mainButtonUnhover (self) {
    button_hovering_a = 0;
    // Move the button back down
    self.style.zIndex = 5;

    // Shrink the button back down
    self.style.transform = "scale(1)";

    switch(clicked) {
        case 0:
            bg_image.src = previous_bg_image;
            break;

        case 1:
            bg_image.src = current_bg_image;
    }
    console.log("Are we hovering?", button_hovering_a, button_hovering_b);
    // Log all actively hovered buttons
    console.log("Actively hovered buttons:");
    hoveredButtons.forEach(button => console.log(button.id));
    
    console.log("Are we hovering?", button_hovering_a, button_hovering_b);
    hoveredButtons.delete(self);
}

function mainButtonClick (self) {
    // Update the current image to reflect the button
    changeBgImageClick(self);
    clicked = 1;
}

window.onwheel = e => {
    let depth = window.scrollY;
    let new_height;

    if (depth > 512) {
        offset = 5;
        main_container.style.height='40px';
    } else if (depth == 0) {
        offset = -10;
        main_container.style.height='70px';
    } else {
        new_height = 70 - (depth/(256/15));
        offset = -10 - (depth/(-512/15));
        main_container.style.height=`${new_height}px`;
    }
}