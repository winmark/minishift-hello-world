let pEl = document.getElementsByTagName("p");
let str = "";

for (let i = 0; i < pEl.length; i++) {
    pEl[i].addEventListener("click", () => {
        if (pEl[i].innerText !== "=") {
            if (pEl[i].innerText != "*" && pEl[i].innerText != "+" && pEl[i].innerText != "-" && pEl[i].innerText != "/" && pEl[i].innerText != "%" && pEl[i].innerText !== "+-") {
                display.innerText = pEl[i].innerText;
            }
            str += pEl[i].innerText;
        }
        if (pEl[i].innerText === "=") {
            display.innerText = eval(str);
        }

        if (pEl[i].innerText === "AC") {
            display.innerText = " **CLEAR** ";
        }
    });
}

let str2 = "";
document.addEventListener("keydown", (e) => {
    let tasto = e.key;
    if ((tasto >= 0) || (tasto <= 9)) {
        display.innerText = e.key;
        str2 += tasto;
    }

    if ((tasto === "*") || (tasto === "+") || (tasto === "-") || (tasto === "/")) {
        str2 += tasto;
    }

    if (e.keyCode === 13) {
        display.innerText = eval(str2);
    }
});