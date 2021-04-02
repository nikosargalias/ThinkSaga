import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage.js";
import ArticleClass from "./ArticleClass.js";
const articles = loadFromLocalStorage("articles") || {};
const articleImages = loadFromLocalStorage("images") || {};
const ids = loadFromLocalStorage("ids") || [];

function generateId() {
  const ids = loadFromLocalStorage("ids");
  let newId;
  if (ids) {
    newId = ids.length + 1;
  } else {
    newId = 1;
  }
  saveIdToDatabse(newId);
  return newId;
}

function createArticle({ title, author, body, category }, id) {
  const article = new ArticleClass({
    title: title.value,
    author: author.value,
    body: body.value,
    category: category.value,
    id: id,
  });
  saveArticleToDatabase(article);
  return article;
}

function saveImgData(id) {
  const reader = new FileReader();
  const imgName = document.getElementById("image").files[0].name;
  const img = document.getElementById("image").files[0];
  reader.readAsDataURL(img);

  return reader.addEventListener("load", function () {
    const imgData = this.result;
    articleImages[id] = {
      imgData: imgData,
      imgName: imgName,
      id: id,
    };
    saveToLocalStorage("images", articleImages);
  });
}

function saveIdToDatabse(id) {
  ids.push(id);
  saveToLocalStorage("ids", ids);
}

function saveArticleToDatabase(article) {
  const id = article.id;
  articles[id] = article;
  saveToLocalStorage("articles", articles);
}

export { generateId, createArticle, saveImgData };
