function handleEncrypt() {
    let inputText = document.getElementById("inputText").value

    document.getElementById("outputText").value = encrypt(inputText);
}

function handleDecrypt() {
    let inputText = document.getElementById("inputText").value

    document.getElementById("outputText").value = decrypt(inputText);
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
