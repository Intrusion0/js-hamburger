//Hamburger menu: mostrare / nascondere il menu principale

// Mostro il menu
const openMenu = document.querySelector(".header-right > a");

openMenu.addEventListener("click",

    function(){
        hamburgerMunu = document.querySelector(".hamburger-menu");
        hamburgerMunu.style.display = "block";
    }
);

// Nascondo il menu
const closeMenu = document.querySelector(".close");

closeMenu.addEventListener("click",
        
    function(){
        hamburgerMunu = document.querySelector(".hamburger-menu");
        hamburgerMunu.style.display = "none";
    }
);

// Chiudo il menu oltre i 1000px
const closeMenuOTP = document.querySelector(".hamburger-menu");

closeMenuOTP.style.display = "none";