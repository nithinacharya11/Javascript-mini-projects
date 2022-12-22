let quoteList = [];

const btn = document.querySelector('button');
const quoteContent = document.querySelector('.quote');
const authorContent = document.querySelector('.author')
const tweetBtn = document.getElementById('tweet')

showQuote = () => {
    let randomNo = Math.floor(Math.random() * quoteList.length)
    quote = quoteList[randomNo].text;
    author = quoteList[randomNo].author;
    quoteContent.textContent = quote;
    if(!author){
        authorContent.textContent = 'Unknown';
    }
    authorContent.textContent = author;
};

tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quote} -${author}`;
    window.open(tweetUrl, '_blank');
}

btn.addEventListener('click', showQuote);
tweetBtn.addEventListener('click',tweetQuote)


fetch('https://type.fit/api/quotes')
.then(response => response.json())
.then(data => {
        quoteList = data;
    })
.catch(error => console.error(error))