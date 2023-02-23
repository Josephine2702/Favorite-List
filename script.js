const inputName = document.querySelector('.item-name');
const mainList = document.querySelector('.list');
const ulItem = document.querySelector('.list-item');
const autorInput = document.querySelector('.item-autor');
let block = document.querySelector('.container');
console.log(block);
const genre = document.querySelector('.genre');




let list = [];
let i = 1;

// чтобы каждое слово начиналось с заглавной буквы
function capitalize(str) {
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
    };
       

// inputName.addEventListener('change', (e) => {
//     e.preventDefault();

//    createList(ulItem, inputName)
    
// })

// autorInput.addEventListener('change', (e) => {
//     e.preventDefault();
//     createList(ulItem, autorInput);
// })


 function createList (parent, input) {
    let inputItem = capitalize(input.value);
    list.push(inputItem);

    if(input.classList.contains('item-name')){
        input.value = '';
        parent.innerHTML += `
    <li> ${i++}  "${inputItem}"</li>
    `;
} 
 if (input.classList.contains('item-autor')){
    input.value = '';
        parent.innerHTML += `
    <span> ${inputItem}</span>
    `;
 }

 if (input.classList.contains('genre')){
        const res = input.value;
    parent.innerHTML += `
    <p> ${res}</p>
     `;
 }

console.log(list);
 }


// function option (parent, input){
//     const res = input.value;
//     parent.innerHTML += `
//     <p> ${res}</p>
//      `;
    
// }



//  genre.addEventListener('change', (e) => {
//     e.preventDefault();

//     createList(ulItem, genre)
//  });


block.addEventListener('change', (e) => {
    e.preventDefault();
    const target = e.target;
    console.log(target);

    if(target.classList.contains('item-name')){
        createList(ulItem, inputName)
    } else if (target.classList.contains('item-autor')){
        createList(ulItem, autorInput);
    } else if (target.classList.contains('genre')){
        createList(ulItem, genre)
    }
    
})
