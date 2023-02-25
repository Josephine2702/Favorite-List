const inputName = document.querySelector('.item-name');
const mainList = document.querySelector('.list');
const ulItem = document.querySelector('.list-item');
const autorInput = document.querySelector('.item-autor');
let block = document.querySelector('.container');
const bookList = document.querySelector('.book__list');

const genre = document.querySelector('.genre');
let ratingArr = document.querySelectorAll('.rating__item');
const rang = document.querySelector('.rating');


let list = [];
let i = 1;

// чтобы каждое слово начиналось с заглавной буквы
function capitalize(str) {
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
    };
       


////////////// rating
const ratings = document.querySelectorAll('.rating');
if(ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;
    for(let i = 0; i < ratings.length; i++) {
        const rating = ratings[i];
        initRating(rating);
    }

    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();

        if(rating.classList.contains('rating_set')) {
            setRating(rating);
        }
    }

    function initRatingVars(rating){
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }

    function setRatingActiveWidth(i = ratingValue.innerHTML) {
        const ratingActiveWidth = i / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
// возможность указывать оценку
    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');
        for(let i = 0; i < ratingItems.length; i++) {
            const ratingItem = ratingItems[i];
            ratingItem.addEventListener('mouseenter', function (e) {
                // обновляем переменную
                initRatingVars(rating);
                // обновление активных звезд
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener('mouseleave', function (e) {
                setRatingActiveWidth();
            });
            ratingItem.addEventListener('click', function (e){
                initRatingVars(rating);
               
                if(rating.dataset.ajax){
                    setRatingValue(ratingItem.value, rating);
                } else {
                    ratingValue.innerHTML = i + 1;
                    setRatingActiveWidth(); 
                }
            })
           
        }
    }
}

const book = {};


function createList (parent, input) {
    let inputItem = capitalize(input.value);
    list.push(inputItem);
    if(input.classList.contains('item-name')){
        input.value = '';
        parent.innerHTML += `
        <li> ${i++}  "${inputItem}"</li>
        `;
        book.name = inputItem;
        } 

        if (input.classList.contains('item-autor')){
        input.value = '';
            parent.innerHTML += `
        <span> ${inputItem}</span>
        `;
        book.autor = inputItem;
        }

        if (input.classList.contains('genre')){
        const res = input.value;
        parent.innerHTML += `
        <p> ${res}</p>
        `;
        book.type = res;
        
        }
        
 }


    function setRatToList (arr, parent, e){
        arr.forEach(item => {
            if(e.target === item){
                parent.innerHTML += `
                <div class="rating_style">${item.value}★</div>
                `;
                book.mark = item.value;
                
            }
           
        })
    }
    
    rang.addEventListener('click', (e) => {

        if (inputName.value && autorInput.value && genre.value){
             createList(ulItem, inputName);
            createList(ulItem, autorInput);
            createList(ulItem, genre);
            setRatToList(ratingArr, ulItem, e);
        }
            
                    
       
    })
    


    





















