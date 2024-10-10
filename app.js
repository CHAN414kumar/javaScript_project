const quote=document.querySelector("blockquote");
const author=document.querySelector(".author");

const quoteBtn=document.querySelector(".quoteBtn");

const tweetBtn=document.querySelector(".tweetBtn");

const link="https://quotes-api-self.vercel.app/quote";

const getData= async()=>{

  const response=await fetch(link);

  const data=await response.json();

  quote.innerText=data.quote;
  author.innerText=data.author;
}

getData();

quoteBtn.addEventListener("click",()=>{
  getData();
})

tweetBtn.addEventListener("click",()=>{
  window.open("https://twitter.com/intent/tweet?text="+quote.innerText,"tweet post","width=400,height=400");
})

