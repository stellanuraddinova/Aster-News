import Router from "./router.js";
import { serviceFetchNews, serviceFetchNewsView } from "./service.js";
import { uiNewsItem } from "./ui.js";
const router = new Router();

router.addRoute('home', 'home.html', async() =>{
    const newsContent = document.querySelector('#newsContent');
    const res = await serviceFetchNews();
    newsContent.innerHTML = '';
    res.data.forEach(item => {
        newsContent.innerHTML += uiNewsItem(item);
    })
}) 

router.addRoute('news', 'news.html', async (slug) => {
    const news = await serviceFetchNewsView(slug)
    const title = document.querySelector('#title')
    const category = document.querySelector('#category')
    const photo = document.querySelector('#photo')
    const content = document.querySelector('#content')
    const date = document.querySelector('#date')
    const author = document.querySelector('#author')

    if(news){
        title.innerHTML = news.title;
        category.innerHTML = news.category.name;
        category.href = `#search?category=${news.category.slug}`;
        content.innerHTML = news.content
        photo.src = news.photo
        content.innerHTML = news.content
        author.innerHTML = news.author.fullname
        date.innerHTML = news.published_date

    }
})