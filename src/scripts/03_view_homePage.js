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
    const article = articles[prop];
    const image = articleImages[article.id];
    // try {
    articlesContainer.innerHTML += `
        <article class="card">
          <figure class="img-container">
            <img  src="${image.imgData}" alt="" />
            </figure>
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
    // } catch (e) {
    // } finally {
    //   articlesContainer.innerHTML += `
    //   <article class="card">
    //     <figure class="img-container">
    //       <img  src="#" alt="Your Article Image" />
    //       </figure>
    //     <div class="content">
    //       <div class="category">${article.category}</div>
    //       <a href="./article.html#${article.id}">
    //         <h3>${article.title}</h3>
    //       </a>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis dolore
    //         adipisci dignissimos odit culpa nam expedita perferendis quod accusantium.
    //       </p>
    //     </div>
    //   </article>
    //   `;
    // }
  }
}

export { renderArticlesHomePage };
