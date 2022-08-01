function runGame() {
    const options = ["tas", "kagit", "makas"]
    const playerChoise = "tas"
    const randomMaterialNumber = options[Math.floor(Math.random() * 3)];
    const computerIcon = document.querySelector(".computer-image img");
    const sonuc = document.querySelector(".result")
    setTimeout(() => {
        computerIcon.src = `../images/${randomMaterialNumber}.png`;
    }, 1000);
    if (playerChoise) {
        if (computerChoise === "tas") {
            sonuc.innerHTML = "berabere"
            return "berabere"
        } else if (computerChoise === "kagit") {
            sonuc.innerHTML = `player: 0 computer: 1`
            return "kaybettiniz"
        } else {
            sonuc.innerHTML = `player: 1 computer: 0`
            return "kazandınız"
        }
    }

}