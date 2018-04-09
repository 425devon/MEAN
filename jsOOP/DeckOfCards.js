class Deck{
    constructor(){
        this.cards = [];
        this.suits = ['club','diamond','heart','spade'];
        //populate 52 new cards
        for(var suit of this.suits){
            for(let i = 1; i < 14; i++){
                this.cards.push(new Card(suit, i));
            }
        }
    }
    shuffle(){
        var m = this.cards.length, t , i;
        //while there are remaining elements to shuffle
        while(m){
            //pick a remaining element
            i = Math.floor(Math.random() * m--);
            //And swap it with the current element
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
        return this.cards;
    }
    reset(){
        this.cards = [];
        for(var suit of this.suits){
            for(let i = 1; i < 14; i++){
                this.cards.push(new Card(suit, i));
            }
        }
    }
    deal(){
     if(this.cards.length > 0){
         return this.shuffle().pop();
     }else{
         return this.reset().shuffle().pop();
     }
    }
}

class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }

    get getSuit(){
        return this.suit;
    }
    set setSuit(value){
        this.suit = value;
    }
    get getValue(){
        return this.value;
    }
    set setValue(value){
        this.value = value;
    }
}

class player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    getDeal(card){
        this.hand.push(card);
    }
    discard(){
        return this.hand.pop();
    }
}


const testDeck = new Deck;
//console.log(testDeck.cards);
console.log(testDeck.shuffle());
testDeck.reset();
console.log(testDeck.cards);
console.log(testDeck.deal());

const bill = new player("bill");

bill.getDeal(testDeck.deal());
bill.getDeal(testDeck.deal());
console.log(bill.name)
console.log(bill.hand)
