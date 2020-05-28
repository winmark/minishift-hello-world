let p = document.getElementsByTagName("p");

let n1 = "";
let n2 = "";
let res;
let operator;
let secondoNumero = false;
let elabora = false;

for (let i = 0; i < p.length; i++) {
    p[i].addEventListener("click", (event) => {
        let res;
        console.log(p[i].innerText);


        //se clicco un n da 0 a 9 entro
        if (p[i].innerText != "+" && p[i].innerText != "-" && p[i].innerText != "=" && p[i].innerText != "/" && p[i].innerText != "x") {
            //controllo se lavoro sul primo o secondo numero
            if (secondoNumero === true) {
                n2 += p[i].innerText;
            } else {
                n1 += p[i].innerText;
            }


            //prove di stampa
            //console.log(n1 + "" + n2 + "" + operator);

            //se clicco un'operatore tranne uguale

        } else if (p[i].innerText === "+" || p[i].innerText === "-" || p[i].innerText === "/" || p[i].innerText === "x") {
            operator = p[i].innerText;
            secondoNumero = true;
        }

        if (p[i].innerText === "=") {
            n1 = + n1;
            n2 = + n2;

            if (operator === "+") {
                res = n1 + n2;
                display.innerText = res;
            } else if (operator === "-") {
                res = n1 - n2;
                display.innerText = res;
            } else if (operator === "/") {
                res = n1 / n2;
                display.innerText = res;
            } else if (operator === "x") {
                res = n1 * n2;
                display.innerText = res;
            }

            console.log('lollo' + res);
        }
    });
}
