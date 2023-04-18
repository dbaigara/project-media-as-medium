// JS for testing NY-Times API 
// import bootstrap from './node_modules/bootstrap/js';

const articleDiv = document.getElementById("articles");

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const now = new Date('02/12/2013');
// console.log(days[now.getDay()] + ' ' + months[now.getMonth()] + ' ' + now.getDate() + ' ' + now.getFullYear());
//Tuesday February 12 2013
async function getTopStories () {
    const response = await fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=k6Z3FjEVLo5TgrrloJaxNyG4bYeXioJy");
    console.log(response);

    const respJSON = await response.json();
    console.log(respJSON);
    const articles = respJSON.results.slice(0,3);

    console.log(articles);
    articles.map((item, _index) => {
        const now = new Date(item.published_date);
        // console.log(now.getDate() + ' ' + months[now.getMonth()])
        const indexHtml = `<div class="articles"><a href="about.html">
        <div class="d-flex flex-row mt-5">
            <div class="col-9">
                <div class="d-flex flex-row mb-3 cont-nav-text">
                    <img width="24" height="24" class="authorLogo me-1" src="./assets/author-logo.png" alt="logo-inst">
                    <p class="author-name me-1 mt-1">${item.byline}</p>
                    <p class="in text-center me-1 mt-1 align-items-center">in</p>
                    <p class="topic-name me-1 mt-1">${item.item_type}</p>
                    <span class="dot  me-1 ">.</span>
                    <p class="cont-date mt-1">${now.getDate() + ' ' + months[now.getMonth()]}</p>
                </div>
                <div class="main-part">
                    <h1 class="title ">${item.title}</h1>
                    <br class="abstract mb-5">${item.abstract}</p>
                    <div class="d-flex">
                        <div class="d-flex col-10 footer mt-5">
                            <button class="me-2 btn-my d-flex flex-column justify-content-center align-items-center">
                                <p class="prog-lang m-0 ">${item.section}</p>
                            </button>
                            <p class="read-time me-2 mt-2">12 min read</p>
                            <p class="dot text-center mt-1 me-2">.</p>
                            <p class="select me-2 mt-2">${item.per_facet[0]} et.al</p>    
                        </div>
                        
                        <div class=" d-flex col-1 mt-5">
                            <img class="me-1 mt-1" width="24" height="24" src="./assets/logo-inst.png" alt="logo-inst">
                            <img class="me-1 mt-1" width="24" height="24" src="./assets/logo-inst.png" alt="logo-inst">
                            <img class="me-1 mt-1" width="24" height="24" src="./assets/logo-inst.png" alt="logo-inst">
                        </div>
                    </div>                
                </div>
            </div>
            <div class="img col-3 justify-content-end d-flex">
            <img width="265" height="265" src="${item.multimedia[0].url}">
            </div>
        </div> </a>
        </div>`;
        articleDiv.innerHTML += indexHtml;
// const aboutHTML = 
        // if()
    })
    // .then(response => response.json())
// .then(data => console.log(data))
}

getTopStories();

// const articleDiv = document.getElementById("articles");

// articles.map((item, _index)=> {
//     const html = `<div class="article">
//         <div>
//             <p>${item.author}</p>
//             <p>${item.date}</p>
//             <h4>${item.caption}</h4>
//         </div>
//         <img src="./assets/${_index}.png" width=100/>
//     </div>`;
//     articleDiv.innerHTML += html;
// })