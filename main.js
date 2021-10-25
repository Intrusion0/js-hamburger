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


// BONUS --- Chiusura hamburger menu quando andiamo oltre ai 1000px, in modo che quando ritorniamo sotto i 1000px, l'hamburger menu sia chiuso e non aperto.
window.addEventListener("resize",

    function(){
        if (window.innerWidth > 1000) hamburgerMenu.classList.remove("active");
    }
);