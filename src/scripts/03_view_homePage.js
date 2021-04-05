import { loadFromLocalStorage } from "./localStorage.js";
const articles = loadFromLocalStorage("articles") || {};
const articleImages = loadFromLocalStorage("images") || {};
const articlesContainer = document.getElementById("articles-container");

function renderArticlesHomePage({
  articles,
  articleImages,
  articlesContainer,
}) {
  for (const prop in articles) {
    console.log(articles);
    const article = articles[prop];
    const image = articleImages[article.id];
    articlesContainer.innerHTML += `
        <article class="card">
        <img  src="${image.imgData}" alt="" />
        <div class="content">
          <div class="category">${article.category}</div>
          <a href="./article.html#${article.id}">
            <h3>${article.title}</h3>
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis dolore
            adipisci dignissimos odit culpa nam expedita perferendis quod accusantium.
          </p>
        </div>
      </article>
      `;
  }
}

export { renderArticlesHomePage };
