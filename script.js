const url = "https://api.quotable.io/random";
let h1 = document.querySelector("h1");
let btn = document.querySelector("#btn");
async function getQuote(){
    try{
        let res = await axios.get(url);
        return res.data.content;
    }catch{
        return "No fact found";
    }
}
async function getAuthor(){
    try{
        let res = await axios.get(url);
        return res.data.author;
    }catch{
        return "No author found";
    }
}
btn.addEventListener("click", async () => {
    let quote = await getQuote();
    let author = await getAuthor();
    let blockquote = document.querySelector("#quote");
    blockquote.innerHTML = quote;
    let writer = document.querySelector("#writer");
    writer.innerHTML = author;
})