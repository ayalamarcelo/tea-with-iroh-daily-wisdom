const quotes = [
    {
        quote: `"To be honest, the best tea tastes delicious whether it comes in a porcelain pot or a tin cup...There is a simple honor in poverty."`
    },
    {
        quote: `"The key to [wisdom and tea] is proper aging."`
    },
    {
        quote: `"Follow your passion and life will reward you."`
    },
    {
        quote: `"Are you so busy fighting you cannot see your own ship has set sail?"`
    },
    {
        quote: `"There is nothing wrong with a life of peace and prosperity. I suggest you think about what is your want from your life."`
    },
    {
        quote: `"Be careful what you wish for, admiral. History is not always kind to its subjects."`
    },
    {
        quote: `"At my age, there is only one big surprise left, and I'd just as soon leave it a mystery."`
    },
    {
        quote: `"Sometimes, the best way to solve your own problems is to help someone else."`
    },
    {
        quote: `"Protection and power are overrated. I think you are very wise to choose happiness and love."`
    },
    {
        quote: `"It is usually best to admit mistakes when they occur, and to see to restore honor."`
    },
    {
        quote: `"Power in firebending comes from the breath, not the muscle."`
    },
]

let btn = document.getElementById("qbtn");
let quote = document.getElementsByClassName("quote");

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote[0].innerHTML = quotes[random].quote;
});