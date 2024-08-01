import Router from "./router.js";
import { serviceFetchNews, serviceFetchNewsView } from "./service.js";
import { uiLoading, uiNewsItem } from "./ui.js";
const router = new Router();

router.addRoute("home", "home.html", async () => {
  const newsContent = document.querySelector("#newsContent");
  const showMore = document.querySelector("#showMore");
  const fetchNews = async (page=1) => {
    if(page ===1) uiLoading("show");
    const res = await serviceFetchNews(page);
    uiLoading("hide");
    if(page === 1){
        newsContent.innerHTML = "";
    }
    res.data.forEach((item) => {
      newsContent.innerHTML += uiNewsItem(item);
    });
  };
  fetchNews();
  showMore.addEventListener("click", (e) => {
    const page = e.target.getAttribute('data-page')
    e.target.setAttribute ('data-page', parseInt(page) + 1)
    fetchNews(parseInt(page) + 1);
  });
});

router.addRoute("news", "news.html", async (slug) => {
  uiLoading("show");
  const news = await serviceFetchNewsView(slug);
  uiLoading("hide");
  const title = document.querySelector("#title");
  const category = document.querySelector("#category");
  const photo = document.querySelector("#photo");
  const content = document.querySelector("#content");
  const date = document.querySelector("#date");
  const author = document.querySelector("#author");

  if (news) {
    title.innerHTML = news.title;
    category.innerHTML = news.category.name;
    category.href = `#search?category=${news.category.slug}`;
    content.innerHTML = news.content;
    photo.src = news.photo;
    content.innerHTML = news.content;
    author.innerHTML = news.author.fullname;
    date.innerHTML = moment(news.published_date).format("DD-MM-YYYY HH:mm");
  }
});
