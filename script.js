function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b === 0) {
        return undefined
    } else {
        return a / b
    }
}

function porcent(a,b) {
    return a * 0.01*b
}

let num1 = "", num2 = "", operator = null, resultado = null;
let primero,segundo

function operate(num1, operator, num2) {
    let resultado
    switch (operator) {
        case "+":
            resultado = add(num1, num2)
            break;
        case "-":
            resultado = substract(num1, num2)
            break;
        case "*":
            resultado = multiply(num1, num2)
            break;
        case "/":
            resultado = divide(num1, num2)
            break;
        case "%":
            resultado = porcent(num1,num2)
            break;
        default:
            console.log("Operador invalido")
    }
    return resultado
}

const padre = document.querySelector(".padre")
const display = document.querySelector(".display")
const teclado = document.querySelector(".teclas")
const botones = document.querySelectorAll("button")



botones.forEach((p) => {
    p.addEventListener("click", (e) => {
        let valor = e.target.value;
        let numerico = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(valor)
        let operadores = ["+", "-", "*", "/", "%"].includes(valor)
        let decimal = valor === "."
        let masmenos = valor === "signo"
        let igualdad = valor === "="
        let borradototal = valor === "borrar"
        let retroceso = valor === "retroceder"

        if (numerico) {
            if (operator === null && num2 === "") {
                display.textContent = (num1 += valor)
            } else if (operator !== null && num1 !== "") {
                display.textContent= (num2 += valor)
            }
        }

        if (operadores) {
            if (num1 === "") {
                console.log("Debe ingresar un numero primero")
                return
            } else if (num1 === "0." || num1 === "-") {
                console.log("Formato Invalido")
            } else if (num1 != "" && valor === "%"){
                num2 = "1"
                operator = valor
            } else {
                operator = valor
            }
        }

        if (decimal) {
            if(operator===null){
                if(num1===""){
                    display.textContent = (num1 = "0.")
                }else if(num1.includes(".")){
                    return
                }else{
                    display.textContent = (num1+=valor)
                }
            }else{
                if(num2===""){
                    display.textContent = (num2="0.")
                }else if(num2.includes(".")){
                    return
                }else{
                    display.textContent = (num2+=valor)
                }
            }

        }

        if (masmenos) {
            if(operator === null){
                if(num1 === ""){
                    if(num1.includes("-")){
                        display.textContent = (num1 = "")
                    }else{
                        display.textContent = (num1 = "-")
                    }
                }else{
                    if(num1.includes("-")){
                        display.textContent = (num1 = num1.slice(1)) //devuelve desde el indice 1 en adelante el 0 lo borra
                    }else{
                        display.textContent = (num1 = (num1+" -").split(" ").reverse().join(""))
                    }
                }
            }else{
                if(num2 === ""){
                    if(num2.includes("-")){
                        display.textContent = (num2 = "")
                    }else{
                        display.textContent = (num2 = "-")
                    }
                }else{
                    if(num2.includes("-")){
                        display.textContent = (num2 = num2.slice(1))
                    }else{
                        display.textContent = (num2 = (num2+" -").split(" ").reverse().join(""))
                    }
                }
            }
        }

        if (igualdad) {
            if(num2 === "0." || num2 === "" || operator == null || num2 == "-"){
                return
            }else{
                if(num1.includes(".")){
                    primero = parseFloat(num1)
                }else{
                    primero = parseInt(num1,10)
                }

                if(num2.includes(".")){
                    segundo = parseFloat(num2)
                }else{
                    segundo = parseInt(num2,10)
                }

                resultado = operate(primero,operator,segundo)
                display.textContent = resultado
                num1=resultado.toString()
                num2 = ""
            }
        }

        console.log("a: ", num1)
        console.log("operator", operator)
        console.log("b: ", num2)
        console.log("resultado: ",resultado)

    })
})






