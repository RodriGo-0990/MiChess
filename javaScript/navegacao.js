document.addEventListener("DOMContentLoaded", () => {
    //campos da pagina
    let wrapper = document.getElementById('home')
    let wrapperAbout = document.getElementById('about');
    let wrapperXp   = document.getElementById('xp');
    let wrapperProjects = document.getElementById("projects");
    let wrapperSkills = document.getElementById('skills');
    let wrapperJogo = document.querySelector(".wrapper-jogo");
    //array dos campos
    let campos = [];
    campos.push(wrapper, wrapperAbout, wrapperSkills, wrapperXp, wrapperProjects, wrapperJogo);
    //menu
    let home = document.getElementById('homemenu');
    let about = document.getElementById('aboutmenu');
    let skills = document.getElementById('skillsmenu');
    let xp = document.getElementById('xpmenu');
    let projects = document.getElementById('projmenu');
    let play = document.getElementById('playmenu');

    //menu-mobile
    let hamburguer_icon = document.querySelector(".hamburguer-menu");
    let close_icon = document.querySelector(".close-menu");
    let menu_mobile = document.querySelector(".menu-mobile");

    let about_mobile = document.getElementById('aboutmenu-mobile');
    let skills_mobile = document.getElementById('skillsmenu-mobile');
    let xp_mobile = document.getElementById('xpmenu-mobile');
    let projects_mobile = document.getElementById('projmenu-mobile');
    let play_mobile = document.getElementById('playmenu-mobile');

    //função para navegação
    function movePage(num) {
        campos[num].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })
    }

    //listeners
    home.addEventListener("click", function () {
        movePage(0);
    });
    about.addEventListener("click", function () {
        movePage(1);
    });
    skills.addEventListener("click", function () {
        movePage(2);
    });
    xp.addEventListener("click", function () {
        movePage(3);
    });
    projects.addEventListener("click", function () {
        movePage(4);
    });
    play.addEventListener("click", function () {
        movePage(5);
    });

    //listeners to mobile
    about_mobile.addEventListener("click", function () {
        movePage(1);
        menu_mobile.style.display = "none";
    });
    skills_mobile.addEventListener("click", function () {
        movePage(2);
        menu_mobile.style.display = "none";
    });
    xp_mobile.addEventListener("click", function () {
        movePage(3);
        menu_mobile.style.display = "none";
    });
    projects_mobile.addEventListener("click", function () {
        movePage(4);
        menu_mobile.style.display = "none";
    });
    play_mobile.addEventListener("click", function () {
        movePage(5);
        menu_mobile.style.display = "none";
    });

    hamburguer_icon.addEventListener("click", function () {
        menu_mobile.style.display = "flex";
    })
    close_icon.addEventListener("click", function () {
        menu_mobile.style.display = "none";
    })

})

//SCROLLREVEAL
window.reveal_ = ScrollReveal({ reset: false })
reveal_.reveal('.profile',
    {
        origin: 'left',
        duration: 2000,
        distance: '40px',
    })
reveal_.reveal('.profile p',
    {
        origin: 'left',
        duration: 2700,
        distance: '40px',
    })

reveal_.reveal('.image-profile',
    {
        origin: 'right',
        duration: 2000,
        distance: '40px',
    })

reveal_.reveal('#title',
    {
        duration: 2500,
    })
reveal_.reveal('.texto',
    {
        duration: 2600,
        origin:'bottom',
        distance: '15px',
    }
)
reveal_.reveal('.skill-icons',
    {
        duration: 2000,
        origin:'bottom',
        distance: '15px',
    }
)
reveal_.reveal('.wrapper-card-xp',
    {
        duration: 1000,
        origin:'bottom',
        distance: '20px',
    }
)
reveal_.reveal('.card',
    {
        duration: 1000,
        origin:'bottom',
        distance: '20px',
    }
)