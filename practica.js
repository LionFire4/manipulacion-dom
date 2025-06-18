const item = document.getElementById("caja1");
console.log(item);

const itemClass = document.getElementsByClassName("item");
console.log(itemClass);

const itemTag = document.getElementsByTagName("li");
console.log(itemTag);

const firstItem = document.querySelector(".item");
console.log(firstItem);

const allitems = document.querySelectorAll(".item");
console.log(allitems);

const parent = firstItem.parentElement;
console.log(parent);

const childNode = firstItem.childNodes;
console.log(childNode);

const childrenFirst = parent.firstElementChild;
console.log(childrenFirst);

const childrenLast = parent.lastElementChild;
console.log(childrenLast);

const hijos = parent.children;
console.log(hijos);

const brothernext = parent.nextElementSibling;
console.log(brothernext);

const brotherprev = parent.previousElementSibling;
console.log(brotherprev);

// const title = document.getElementsByClassName('titulo');
// console.log(title);

// cambiar el titulo al hacer click
const title2 = document.querySelector(".titulo");
console.log(title2);

// Cambiar titulo al hacer click y si hay otra vez click devolver al estado inicial y asi sucesivamente como un bucle infinito
let contador = 0;
title2.addEventListener("click", () => {
    contador++;
    if (contador % 2 === 0) {
        title2.innerHTML = "Bienvenido al sitio";
    } else {
        title2.innerHTML = "Hola Mundo";
    }
});









