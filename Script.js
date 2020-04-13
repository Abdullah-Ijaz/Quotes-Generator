const quotes = [
    {
        name:  "Signmund Freud",
        quote: "One day, in retrospectm the years of struggle will strike you as the most beautiful."
    },{
        name:  "Karl Marx",
        quote: "The opressed are allowed once every few years to decide which particalar representatives of the opressing class are to represent and repress them."
    },{
        name:  "Pope John Paul the 2nd",
        quote: "The future starts today, not tomorrow."
    },{
        name:  "Aristotle",
        quote: "Knowing yourself is the beginning of all wisdom."
    },{
        name:  "Leo Tolstoy",
        quote: "Everyone thinks of changing the world but no one thinks of changing himself."
    },{
        name:  "Confucius",
        quote: "By three methods we may learn wisdon: First, by reflection, which is the noblest; Second, by imitation, which is the easiest; and third by experience, which is the bitterest."
    },{
        name:  'Ali Ibn Abu Talib',
        quote: 'Everyone who is taken bny death asks for more time, while everyone who still has time makes excuses for procrastination.'
    },{
        name:  "Voltiare",
        quote: "Let us read, and let us dance; these two amusements will never any harm to the world."
    },{
        name:  "Mufti Ismail Menk",
        quote: "No matter what your physical appearence, when you have kindness in your heart, you're the most beautiful person in the world."
    }
] 
const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.getElementById('quoteAuthor');
const quote = document.getElementById('quote');

quoteBtn.addEventListener('click', displayQuote);
function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}