function handleEncrypt() {
    let inputText = document.getElementById("inputText").value
    if (inputText === null || inputText === "") {
        document.getElementById("messageNotFound").style.display = "block";
        document.getElementById("outputContainer").style.display = "none";
        return
    }

    let para = document.getElementById("outputText")
    para.textContent = encrypt(inputText);

    document.getElementById("messageNotFound").style.display = "none";
    document.getElementById("outputContainer").style.display = "block";
}

function handleDecrypt() {
    let inputText = document.getElementById("inputText").value
    if (inputText === null || inputText === "") {
        document.getElementById("messageNotFound").style.display = "block";
        document.getElementById("outputContainer").style.display = "none";
        return
    }

    let para = document.getElementById("outputText")
    para.textContent = decrypt(inputText);

    document.getElementById("messageNotFound").style.display = "none";
    document.getElementById("outputContainer").style.display = "block";
}

function encrypt(inputText) {
    let letters = String(inputText).split("");
    let newText = "";
    for (const letter of letters) {
        newText += replaceLetter(letter);
    }
    return newText;
}

function replaceLetter(letter) {
    switch (letter) {
        case "a": return "ai";
        case "e": return "enter";
        case "i": return "imes";
        case "o": return "ober";
        case "u": return "ufat";
        default: return letter;
    }
}

function decrypt(inputText) {
    return String(inputText).replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/u, "u");
}
