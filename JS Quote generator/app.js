let quoteList = [];
let quote = 'The man who has no imagination has no wings.'
let author = 'Muhammad Ali'

const  quoteBtn = document.getElementById('quote-button');
const quoteContent = document.querySelector('.quote');
const authorContent = document.querySelector('.author')
const tweetBtn = document.getElementById('tweet-button')

showQuote = () => {
    let randomNo = Math.floor(Math.random() * quoteList.length)
    quote = quoteList[randomNo].text;
    author = quoteList[randomNo].author;
    console.log(quote.length)
    if(!author){
        authorContent.textContent = 'Unknown';
    }else{
        authorContent.textContent = author;
    }
    if(quote.length > 130){
        quoteContent.classList.add('long-quote')
    }else{
        quoteContent.classList.remove('long-quote')
    }
    quoteContent.textContent = quote;
};

tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" -${author}`;
    window.open(tweetUrl, '_blank');
}

quoteBtn.addEventListener('click', showQuote);
tweetBtn.addEventListener('click',tweetQuote)


fetch('https://type.fit/api/quotes')
.then(response => response.json())
.then(data => {
        quoteList = data;
    })
.catch(error => console.error(error))