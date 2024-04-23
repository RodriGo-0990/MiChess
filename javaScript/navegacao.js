document.addEventListener("DOMContentLoaded", () => {
    //campos da pagina
    let wrapper = document.querySelector(".wrapper")
    let wrapperProjects = document.querySelector(".wrapper-projects");
    let wrapperSkills = document.querySelector(".wrapper-skills");
    let wrapperJogo = document.querySelector(".wrapper-jogo");
    //array dos campos
    let campos = [];
    campos.push(wrapper, wrapperSkills, wrapperProjects, wrapperJogo);
    //menu
    let skills = document.getElementById("skillsmenu");
    let projects = document.getElementById("projmenu");
    let play = document.getElementById("playmenu");
    let arrow = document.querySelector(".wrapper-back-to-top")

    //função para navegação
    function checkScroll() {
        if (window.scrollY > 200) {
            arrow.style.display = "block";
        } else {
            arrow.style.display = "none";
        }
    }
    function movePage(num) {
        campos[num].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        })
    }
    checkScroll()

    //listeners
    arrow.addEventListener("click", function () {
        movePage(0);
    });
    skills.addEventListener("click", function () {
        movePage(1);
    });
    projects.addEventListener("click", function () {
        movePage(2);
    });
    play.addEventListener("click", function () {
        movePage(3);
    });

    window.addEventListener("scroll", checkScroll);
})

//SCROLLREVEAL
window.reveal_ = ScrollReveal({ reset: false })
reveal_.reveal('.profile > .card',
    {
        duration: 3000,
        distance: '40px',
    })

reveal_.reveal('.image-profile',
    {
        duration: 3000,
        distance: '40px',
    })

reveal_.reveal('.card-skill',
    {
        origin: 'right',
        duration: 2000,
        distance: '100px',
    })

reveal_.reveal('.wrapper-carrossel',
    {
        duration: 3000,
        distance: '40px',
    })

if (window.innerWidth > 900) {
    reveal_.reveal('.card1', {
        duration: 2000,

    })
    reveal_.reveal('.card2', {
        duration: 1000,
        delay: 500,

    })
    reveal_.reveal('.card3', {
        duration: 1400,
        delay: 800,

    })
}

reveal_.reveal('.screen',
    {
        duration: 2000,
    })