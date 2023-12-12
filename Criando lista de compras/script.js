/*

    capture 10 itens para compor a lista de supermercado

    depois, imprima-os separando por vírgula

*/

let items = [];
for( let item = 0; item < 10; item++ ) {
    itemName = prompt("Digite o item " + (item + 1));
    items.push(itemName);
}

alert(items);