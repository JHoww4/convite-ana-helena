const botao = document.querySelector("#btnInfo");
const informacoes = document.querySelector("#informacoes");
const foto = document.querySelector("#foto-aniversariante");
const confeteContainer = document.querySelector("#confete-container");

// Cores no tema melancia (verde, vermelho, amarelo)
const coresConfete = ["#c0392b", "#ff6b6b", "#4caf50", "#ffd93d", "#ffffff"];

// Gera um punhado de confetes caindo. Por enquanto não é chamada
// em lugar nenhum — ainda vamos decidir onde disparar.
function lancarConfete(quantidade = 120) {
    for (let i = 0; i < quantidade; i++) {
        const pedaco = document.createElement("div");
        pedaco.classList.add("confete");

        const tamanho = Math.random() * 6 + 6; // 6px a 12px
        const cor = coresConfete[Math.floor(Math.random() * coresConfete.length)];
        const duracao = Math.random() * 1.5 + 2.5; // 2.5s a 4s
        const atraso = Math.random() * 0.5; // até 0.5s
        const balanco = (Math.random() - 0.5) * 150 + "px"; // -75px a 75px
        const giro = Math.random() * 720 + 360 + "deg";
        const formato = Math.random() > 0.5 ? "50%" : "2px"; // bolinha ou quadrado

        pedaco.style.left = Math.random() * 100 + "%";
        pedaco.style.setProperty("--tamanho", tamanho + "px");
        pedaco.style.setProperty("--cor", cor);
        pedaco.style.setProperty("--duracao", duracao + "s");
        pedaco.style.setProperty("--balanco", balanco);
        pedaco.style.setProperty("--giro", giro);
        pedaco.style.setProperty("--formato", formato);
        pedaco.style.animationDelay = atraso + "s";

        confeteContainer.appendChild(pedaco);

        // Remove o confete do DOM assim que a queda termina
        setTimeout(() => pedaco.remove(), (duracao + atraso) * 1000);
    }
}

informacoes.style.display = "none";

botao.addEventListener("click", () => {

    if (informacoes.style.display === "none") {
        informacoes.style.display = "block";
        botao.textContent = "Esconder informações";
        foto.classList.remove("parado");
        foto.classList.add("girando");
        lancarConfete();
    } else {
        informacoes.style.display = "none";
        botao.textContent = "Ver informações";
        foto.classList.remove("girando");
        foto.classList.add("parado");
    }

});