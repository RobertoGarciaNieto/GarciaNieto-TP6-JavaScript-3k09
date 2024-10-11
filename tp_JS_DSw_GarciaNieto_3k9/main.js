//Ejercicio N°1
const Ejercicio1 =document.getElementById("btn1").addEventListener("click",() =>{
    console.log("----------# Ejercicio 1 #----------");
    //punto 2
    let a = 5;
    let b = 10;
    let c = a + b;
    console.log("La suma de a y b es: "+ c);
    //punto 3
    let name = prompt("Insege su nombre");
    console.log("Hola, "+name+"!");
});

//Ejercicio N°2
const Ejercicio2 =document.getElementById("btn2").addEventListener("click",() =>{
    console.log("----------# Ejercicio 2 #----------");
    //punto 1
    let a = 10;
    let b = 15;
    let c = (a>b) ? a : b;
    console.log("El mayor entre "+ a+" y "+b+" es "+c);
     //punto 2
    let num = prompt("Ingrese un valor y te diré si es par o impar");
    if (num % 2 ===0 ){
        console.log("El número ingresado ("+num+") es par")
    }else{
        console.log("El número ingresado ("+num+") es impar")
    }
});

//Ejercicio N°3
const Ejercicio3 =document.getElementById("btn3").addEventListener("click",() =>{
    console.log("----------# Ejercicio 3 #----------");
    //punto 1
    let a = 10;
    while (a >= 0) {
        console.log(a);
        a --;
    }
    //Punto 2
    let num;
    do {
        num = prompt("Ingrese un valor mayor a 100");
    } while (num<=100);
    console.log("Ingresaste un número mayor a 100: "+num);
});

//Ejercicio N°4
const Ejercicio4 =document.getElementById("btn4").addEventListener("click",() =>{
    console.log("----------# Ejercicio 4 #----------");
    //punto 1
    const esPar = (num) =>{
        return "El número "+num+" es par? "+(num % 2 === 0);
    }
    console.log(esPar(4));
    console.log(esPar(5));
    //Punto 2
    const convertirCelsiusFahrenheit = (celsius) =>{
        return (celsius)+"°C son equivalentes a "+(celsius * 1.8 + 32)+"°F";
    }
    console.log(convertirCelsiusFahrenheit(30))
});

//Ejercicio N°5
const Ejercicio5 =document.getElementById("btn5").addEventListener("click",() =>{
    console.log("----------# Ejercicio 5 #----------");
    //punto 1
    let persona = {
        name: "Roberto",
        edad: 23,
        ciudad: "General Alvear",
        cambiarCiudad: (nuevaCiudad) =>{
            persona.ciudad = nuevaCiudad;
        }
       };
    console.log("Persona: "+persona.name+", Edad: "+persona.edad+", Ciudad: "+persona.ciudad);
    persona.cambiarCiudad("Mendoza");
    console.log("Persona: "+persona.name+", Edad: "+persona.edad+", Ciudad: "+persona.ciudad);
    //Punto 2
    let libro = {
        titulo: "El Quijote",
        autor: "Miguel de Cervantes",
        anio: 1605,
        esAntiguo: () =>{
            let anioActual = new Date().getFullYear();
            return (anioActual - libro.anio) > 10;
        }
    };    
    console.log("El libro "+libro.titulo+" es antiguo? "+libro.esAntiguo());
});

//Ejercicio N°6
const Ejercicio6 =document.getElementById("btn6").addEventListener("click",() =>{
    console.log("----------# Ejercicio 6 #----------");
    //punto 1
    let numeros = [1,2,3,4,5,6,7,8,9,10];
    let numeros2 = [];
    for (let i = 0; i < numeros.length; i++){
        numeros2.push(numeros[i]*2); 
    }
    console.log("Números originales: "+numeros);
    console.log("Números multiplicados por 2: "+numeros2);
    //Punto 2
    let pares=[];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    console.log("Primeros 10 números pares: "+pares);
});

//Ejercicio N°7
const Ejercicio7_1 =document.getElementById("btn7_1").addEventListener("click",() =>{
    console.log("----------# Ejercicio 7_1 #----------");
    //punto 1
    const parrafos = document.querySelectorAll("p");
    parrafos.forEach(parrafo => {
        parrafo.style.color = "blue";
        parrafo.style.fontWeight = "bold";
    });

});
const Ejercicio7_2 =document.getElementById("btn7_2").addEventListener("click",() =>{
    console.log("----------# Ejercicio 7_2 #----------");
    //Punto 2
    const txt = document.getElementById("texto").value;
    alert("Texto Ingresado: "+txt);
});

//Ejercicio N° 8
//Punto 1
const lista = document.getElementById("lista");
const elementos = lista.getElementsByTagName("li");
for(let i=0; i<elementos.length; i++){
    elementos[i].addEventListener("click", (event) =>{
        console.log(event.target.textContent);
    } );
};
//Punto 2
const campoTexto = document.getElementById("texto2");
const btnDeshabilitar = document.getElementById("btnDeshabilitar").addEventListener("click", () => {
    campoTexto.disabled = true;
});
const btnHabilitar = document.getElementById("btnHabilitar").addEventListener("click", () => {
    campoTexto.disabled = false;
});

//Ejercicio N°9
const emailForm = document.getElementById("emailForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir el envío del formulario
    const correo = emailInput.value;
    localStorage.setItem("correo", correo);
    mostrarCorreo();
});;
const emailInput = document.getElementById("email");
const emailDisplay = document.getElementById("emailDisplay");
const deleteEmailButton = document.getElementById("deleteEmail");

const mostrarCorreo = () => {
    const correoGuardado = localStorage.getItem("correo");
    if (correoGuardado) {
        emailDisplay.textContent = "Correo guardado: " + correoGuardado;
        deleteEmailButton.style.display = "block";
    } else {
        emailDisplay.textContent = "";
        deleteEmailButton.style.display = "none";
    }
};

mostrarCorreo();


deleteEmailButton.addEventListener("click", () => {
    localStorage.removeItem("correo");
    mostrarCorreo();
});

