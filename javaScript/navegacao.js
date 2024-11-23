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
    let about = document.getElementById('aboutmenu');
    let skills = document.getElementById('skillsmenu');
    let xp = document.getElementById('xpmenu');
    let projects = document.getElementById('projmenu');
    let play = document.getElementById('playmenu');

    //função para navegação
    function movePage(num) {
        campos[num].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })
    }

    //listeners
    wrapper.addEventListener("click", function () {
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