function runGame() {
    const options = ["tas", "kagit", "makas"]
    const playerChoise = "tas"
    const computerChoise = options[Math.floor(Math.random() * 3)];
    const computerIcon = document.querySelector(".computer-image img");
    const scoreAnons = document.querySelector(".result")
    setTimeout(() => {
        computerIcon.src = `../images/${computerChoise}.png`;
    }, 1000);
    if (playerChoise) {
        if (computerChoise === "tas") {
            scoreAnons.innerHTML = "berabere"
            return "berabere"
        } else if (computerChoise === "kagit") {
            scoreAnons.innerHTML = `player: 0 computer: 1`
            return "kaybettiniz"
        } else {
            scoreAnons.innerHTML = `player: 1 computer: 0`
            return "kazandınız"
        }
    }

}