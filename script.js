function add(a,b){
    return a+b
}

function substract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    if(b===0){
        return undefined
    }else{
        return a/b
    }
}

function porcent(a){
    return a*0.01
}

let num1="",num2="",operator=null,respuesta=null;

function operate(num1,operator,num2){
    let resultado
    switch(operator){
        case "+":
            resultado = add(num1,num2)
            break;
        case "-":
            resultado = substract(num1,num2)
            break;
        case "*":
            resultado = multiply(num1,num2)
            break;
        case "/":
            resultado = divide(num1,num2)
            break;
        case "%":
            resultado = porcent(num1)
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

botones.forEach((p)=>{
    p.addEventListener("click",(e)=>{
        let valor = e.target.value;
        let numerico =["1","2","3","4","5","6","7","8","9","0"].includes(valor) 
        let operadores = ["+","-","*","/","%"].includes(valor)
        let igualdad = valor==="="
        let extras = [".","signo"].includes(valor)

        if(numerico){
            if(operator===null && num2 === ""){
                num1+=valor
            }else if(operator!=null && num1 !==""){
                num2+=valor
            }
        }
        
        if(operadores){
            if(num1===null){
                console.log("Debe ingresar un numero primero")
                return
            }else{
                operator = valor
            }
        }

        if(igualdad){
            
        }

        console.log("a: ",num1)
        console.log("operator",operator)
        console.log("b: ",num2)

    })
})






