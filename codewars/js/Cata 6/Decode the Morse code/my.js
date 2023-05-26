decodeMorse = function(morseCode) {
    let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", 
    ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-",
    "..-", "...-", ".--", "-..-", "-.--", "--..", " ", "...---...", "", "-.-.--",
    ".-.-.-"];
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ~=!.";

    let letters = [];
    let res = "";

    morseCode = morseCode.replace(/[^\-\.\s]/g, "");
    let words = morseCode.split("   ");

    for (let i = 0; i < words.length; i++) {
        let l = words[i].split(" ");
        if (l[i] != "" || l.length > 2) {
            letters = letters.concat(l);
            letters.push(" ");
        }
    }
    letters.pop();

    for (let i = 0; i < letters.length; i++) {
        let pos = morse.indexOf(letters[i]);
        if (char[pos] == "~") {
            res += "SOS"
        } else {
            if (char[pos] !== "=")
                res += char[pos]
        }
    }
    while (res[0] == " ") {
        res = res.slice(1, res.length)
    }
    return res;
}
