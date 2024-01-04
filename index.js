document.addEventListener('DOMContentLoaded',()=>{

    let bottone = document.getElementById('removeCard');
    bottone.innerText = 'Rimuovi le '+counterCard()+ ' Card!';

});

function counterCard(){
    let count = document.querySelectorAll('.card');
    return count.length;
}

function rotateIcon(event){
    let button = event.target;
    let verso = button.style.rotate;
    
   if (verso == '180deg') {
    button.style.rotate = '0deg';
   }else{
    button.style.rotate = '180deg';
   }
}

function removeCard(){
   let cards = document.querySelectorAll('.card');

   for (const card of cards) {
    console.log(card);
    card.parentNode.remove(card);
   }
}