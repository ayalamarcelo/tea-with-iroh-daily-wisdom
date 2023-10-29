const quotes = [
    {
        "quote": `"To be honest, the best tea tastes delicious whether it comes in a porcelain pot or a tin cup...There is a simple honor in poverty."`
    },
    {
        "quote": `"The key to [wisdom and tea] is proper aging."`
    },
    {
        "quote": `"Follow your passion and life will reward you."`
    },
    {
        "quote": `"Are you so busy fighting you cannot see your own ship has set sail?"`
    },
    {
        "quote": `"There is nothing wrong with a life of peace and prosperity. I suggest you think about what is your want from your life."`
    },
    {
        "quote": `"Be careful what you wish for, admiral. History is not always kind to its subjects."`
    },
    {
        "quote": `"At my age, there is only one big surprise left, and I'd just as soon leave it a mystery."`
    },
    {
        "quote": `"Sometimes, the best way to solve your own problems is to help someone else."`
    },
    {
        "quote": `"Protection and power are overrated. I think you are very wise to choose happiness and love."`
    },
    {
        "quote": `"It is usually best to admit mistakes when they occur, and to see to restore honor."`
    },
    {
        "quote": `"Power in firebending comes from the breath, not the muscle."`
    },
    {
        "quote": `"This is the best tea in the city, the secret ingredient is love."`
    },
    {
        "quote": `"Whenever I drink tea in the morning, I feel like i am channeling."`
    },
    {
        "quote": `"You can't buy happiness but you can buy tea, and that's kind of the same thing."`
    },
    {
        "quote": `"To be honest with you, the best tea tastes delicious, whether it comes in a porcelain pot or tin cup."`
    },
    {
        "quote": `"I know you're not supposed to cry over spilled tea, but it's just so sad!"`
    },
    {
        "quote": `"Sick of tea? That's like being sick of breathing!"`
    },
    {
        "quote": `"So I was thinking about names for my new tea shop… how about… the Jasmine Dragon?"`
    },
    {
        "quote": `"I have discovered my first order of business as interim fire lord! i'll declare a national tea appreciation day."`
    },
    {
        "quote": `"You should know this is not a natural sickness. But that shouldn't stop you from enjoying tea."`
    },
    {
        "quote": `"You're looking at the rare white dragon bush. Its leaves make a tea so delicious it's heartbreaking! That, or it's the white jade bush, which is poisonous."`
    },
    {
        "quote": `"It's time for you to look inward and start asking yourself the big question: who are you and what do you want?"`
    },
    {
        "quote": `"Pride is not the opposite of shame, but its source. True humility is the only antidote to shame."`
    },
    {
        "quote": `"Destiny is a funny thing. You never know how things are going to work out. But if you keep an open mind and an open heart, I promise you will find your own destiny someday."`
    },
    {
        "quote": `"You have light and peace inside of you. If you let it out, you can change the world around you."`
    },
    {
        "quote": `"You are going through a metamorphosis, my nephew. It will not be a pleasant experience but when you come out of it. You will be the beautiful prince you were always meant to be."`
    },
    {
        "quote": `"You are not the man you used to be. You are stronger and wiser and freer than you ever used to be. And now you have come at the crossroads of destiny. It's time for you to choose. It's time for you to choose good."`
    },
    {
        "quote": `"You must look within yourself to save yourself from your other self. only then will your true self reveal itself."`
    },
    {
        "quote": `"Your critical decision. what you did beneath that lake. It was such a conflict with your image of yourself that you are now at war within your own mind and body."`
    },
    {
        "quote": `"It is important to draw wisdom from many different places. if we take it from only one place, it becomes rigid and stale."`
    },
    {
        "quote": `"Sometimes, the best way to solve your own problems is to help someone else."`
    },
    {
        "quote": `"Who knew floating on a piece of driftwood for three weeks, with no food or water, and sea vultures waiting to pluck out your liver, could make one so tense!"`
    },
    {
        "quote": `"The only thing better than finding something you are looking for is finding something you weren't looking for at a great bargain!"`
    },
    {
        "quote": `"Sometimes life is like this dark tunnel. you can't always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place."`
    },
    {
        "quote": `"Even in the material world, you will find that if you look for the light, you can often find it…but if you look for the dark, that is all you will ever see."`
    },
    {
        "quote": `"Air is the element of freedom. The Air Nomads detached themselves from worldly concerns, and they found peace and freedom. [pause] And they apparently had great senses of humor."`
    },
    {
        "quote": `"Water is the element of change. The people of the Water Tribes are capable of adapting to many things. They have a sense of community and love that holds them together through anything."`
    },
    {
        "quote": `"Earth is the element of substance. The people of the Earth Kingdom are diverse and strong, they are persistent and enduring."`
    }
]

let btn = document.getElementById("qbtn");
let quote = document.getElementsByClassName("quote");

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote[0].innerHTML = quotes[random].quote;
});