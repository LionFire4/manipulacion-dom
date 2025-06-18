// ----UNO----

// // Extraemos el elemento padre
// const parent = document.getElementById('parent');
// console.log(parent);

// // Extraemos los elementos hijos    
// const children = parent.children;
// console.log(children);

// // Extraemos el primer hijo
// const firstChild = children[0];
// console.log(firstChild);

// const fistChild2 = parent.firstElementChild;
// console.log(fistChild2);


// // Extraemos el último hijo
// const lastChild = children[children.length - 1];
// console.log(lastChild);
// const lastChild2 = parent.lastElementChild;
// console.log(lastChild2);

// // Seleccionamos el elemento hermano anterior
// const previousSibling = parent.previousElementSibling;
// console.log(previousSibling);

// // Seleccionamos el elemento hermano siguiente
// const nextSibling = parent.nextElementSibling;
// console.log(nextSibling);


// ----DOS----




const children3 = document.querySelector('li');
console.log(children3);

const parent2 = children3.parentNode;
console.log(parent2);

const grandParent = parent2.parentElement;
console.log(grandParent);

// Accedemos al elemento padre del gran padre
const grandGrandParent = children3.closest('menu'); //Este es mas utilizado
console.log(grandGrandParent);

// Accedemos al elemento padre del gran padre
// const parentGrand = grandParent.parentElement;
// console.log(parentGrand);

// Accedemos al elemento hermano siguiente del gran padre del padre
// const parentGrandNav = parentGrand.nextElementSibling;
// console.log(parentGrandNav);