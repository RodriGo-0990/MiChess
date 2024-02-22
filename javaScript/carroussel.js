document.addEventListener("DOMContentLoaded", ()=>{
    let info = document.getElementById("info");
    let carrossel = document.querySelector(".carrossel");
    let cards = document.querySelectorAll("#card-project");
    let cardWidth = cards[0].offsetWidth;
    let prev = document.getElementById("#prev");
    let next = document.getElementById("#next");
    
    // Função para verificar e ajustar o estilo do carrossel
    function checkWidth() {
        let windowWidth = window.innerWidth;
        if (windowWidth < 512) {
            carrossel.style.display = "flex";
            for (let i = 0; i < cards.length; i++) {
                carrossel.appendChild(cards[i]);
            }
        } else {
            carrossel.style.display = "none";
            for (let i = 0; i < cards.length; i++) {
                info.appendChild(cards[i]);
            }
        }
    }
    checkWidth();

    // Funções para movimentação do carrossel
    function prevCard() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            carrossel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    }

    function nextCard() {
        if (currentIndex > 0) {
            currentIndex--;
            carrossel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    }

    // Adicionar ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", checkWidth);
    // Adicionar ouvinte de evento para rolar o carrossel
    next.addEventListener("click", nextCard);
    prev.addEventListener("click", prevCard);
})