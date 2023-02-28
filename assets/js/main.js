'use strict';

const listaSpesa = [
    "Uova",
    "Latte",
    "Biscotti",
    "Pasta",
    "Pesce",
    "Panna",
    "Riso"
]

const ul = document.querySelector(".list-ctn");


let i = 0;
while (i < listaSpesa.length) {
    const li = document.createElement("li");
    li.append(listaSpesa[i]);
    ul.append(li);
    i++;
}