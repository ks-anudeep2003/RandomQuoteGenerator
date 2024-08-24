let Data = [
    {
        quote:'There are only two great tragedies in life: one is not getting what you want and the other is getting it.',
        author:'Oscar Wilde'
    },
    {
        quote:'Books say: She did this because. Life says: She did this. Books are where things are explained to you; life is where things aren’t. I’m not surprised some people prefer books.',
        author:'Julian Barnes'  
    },
    {
        quote:'Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.',
        author:'Buddha'
    },
    {
        quote:'Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.',
        author:'Albert Einstein'
    },
    {
        quote:'Love takes off the masks that we fear we cannot live without and know we cannot live within.',
        author:'James Baldwin'
    },
    {
        quote:'Sometimes the questions are complicated, and the answers are simple.',
        author:'Dr. Seuss'
    },
    {
        quote:'What gets us into trouble is not what we don’t know. It’s what we know for sure that just ain’t so.',
        author:'Mark Twain'
    },
    {
        quote:'Anyone who has never made a mistake has never tried anything new.',
        author:'Albert Einstein'
    },
    {
        quote:'Knowing what must be done does away with fear.',
        author:'Rosa Parks'
    },
    {
        quote:'Life can only be understood backwards; but it must be lived forwards.',
        author:'Søren Kierkegaard'
    },
    {
        quote:'Life is really simple, but we insist on making it complicated.',
        author:'Confucius'
    },
    {
        quote:'The two most important days of your life are the day that you’re born and the day that you find out why.',
        author:'Mark Twain'
    },
    {
        quote:'In three words I can sum up everything I’ve learned about life: it goes on.',
        author:'Robert Frost'
    }
]


// accessing the quote and author elements to quote it dynamically
let quoteEle = document.querySelector('.quote') 
let authorEle = document.querySelector('.author')

// functionality to update the quotes and author
function GenerateQuote(){
    let i = Math.floor(Math.random()*Data.length)
    let quotes = Data[i]
    quoteEle.innerText = `${quotes.quote}`
    authorEle.innerText = `-${quotes.author}`
}
