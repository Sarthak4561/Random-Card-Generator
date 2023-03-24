let hmm = document.querySelector('form');
hmm.onsubmit = okaay;
let answer;


function okaay(event){
    event.preventDefault();
    // console.log(event);
    // console.log(document.querySelector('#number').value);
    let guchi = new FormData(hmm);
    // console.log(guchi.get('number'));
    answer = guchi.get('number')

    let rem = document.getElementById('remove')
    rem.remove();
}

const show = document.getElementById('show');
show.addEventListener('click',function(){
    if(answer==1){
        console.log(randomCard());
        let paragraph = document.createElement('p')
        paragraph.innerText = randomCard();
        document.body.appendChild(paragraph);
    }
    else{
        let count = answer;
        while (count) {
            let paragraph = document.createElement('p')
            paragraph.innerText = randomCard();
            document.body.appendChild(paragraph);
            count--;
        }
    }
})


const randomCard = function(){

    const cards = ['Hearts','Diamond','Club','Spades'];
    const numbers = ['Ace','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King']
    const randomIndexCards = Math.floor (Math.random() * cards.length);
    const randomIndexNumbers = Math.floor (Math.random() * numbers.length);

    const randomCard = 'Your Cards is '+ numbers[randomIndexNumbers]+' of '+cards[randomIndexCards] ;

    return randomCard;
}
