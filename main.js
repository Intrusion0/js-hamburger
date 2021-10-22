//Hamburger menu: mostrare / nascondere il menu principale

// Mostro il menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const openMenu = document.querySelector(".header-right > a");

openMenu.addEventListener("click",

    function(){
        hamburgerMenu.classList.add("active");
    }
);

// Nascondo il menu
const closeMenu = document.querySelector(".close");

closeMenu.addEventListener("click",
        
    function(){
        hamburgerMenu.classList.remove("active");
    }
);