import {
  generateId,
  createArticle,
  saveImgData,
  editArticle,
  updateImgData,
  deleteArticle,
} from "./02_logic.js";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage.js";
import { renderArticlesHomePage } from "./03_view_homePage.js";
import { renderArticle } from "./04_view_articlePage.js";
import renderArticleData from "./05_edit-article-form";

const articles = loadFromLocalStorage("articles") || {};
const articleImages = loadFromLocalStorage("images") || {};
const articlesContainer = document.getElementById("articles-container");

const pages = {
  homePage: "/index.html",
  uploadArticlePage: "/upload-article.html",
  singleArticlePage: "/article.html",
  editArticlePage: "/edit-article.html",
};

window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname == pages.homePage) {
    renderArticlesHomePage({
      articles,
      articleImages,
      articlesContainer,
    });
  }

  if (window.location.pathname == pages.singleArticlePage) {
    const id = window.location.hash.substring(1);
    const article = articles[id];
    const image = articleImages[id];
    renderArticle(article, image);
  }

  if (window.location.pathname == pages.uploadArticlePage) {
    CKEDITOR.replace("editor1");
    const form = document
      .querySelector("#submit-article")
      .addEventListener("submit", submitArticleForm);

    function submitArticleForm(e) {
      e.preventDefault();
      const articleBody = CKEDITOR.instances.editor1.getData();
      const { title, author, category } = e.target.elements;
      const id = generateId();
      createArticle({ title, author, category, body: articleBody }, id);
      saveImgData(id);
      window.location.assign(`./article.html#${id}`);
    }
  }

  if (window.location.pathname == pages.editArticlePage) {
    CKEDITOR.replace("editor1");
    const id = window.location.hash.substring(1);
    const article = articles[id];
    const image = articleImages[id];

    const deleteFormButton = document.getElementById("delete-article");
    deleteFormButton.onclick = onClickDeleteArticleButton;

    const editArticleFormElem = document.querySelector("#edit-article");
    renderArticleData(editArticleFormElem, article, image);

    const form = document
      .querySelector("#edit-article")
      .addEventListener("submit", handleEditArticleSubmission);

    function handleEditArticleSubmission(e) {
      e.preventDefault();
      const data = {
        article: article,
        title: e.target.elements.title.value,
        author: e.target.elements.author.value,
        category: e.target.elements.category.value,
        body: CKEDITOR.instances.editor1.getData(),
        newImage: e.target.elements.image.value,
      };
      updateArticle(data, id);
      redirect(id);
    }

    function updateArticle(data, id) {
      const image = data.newImage;
      editArticle(data);
      updateImgData(image, id);
    }

    function redirect(id) {
      window.location.assign(`./article.html#${id}`);
    }

    function onClickDeleteArticleButton(e) {
      deleteArticle(id);
    }
  }
});
