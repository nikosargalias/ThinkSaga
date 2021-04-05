function renderArticleData(editArticleFormElem, article, image) {
  const title = editArticleFormElem.elements["article-name"];
  title.value = article.title;

  const author = editArticleFormElem.elements["author-name"];
  author.value = article.author;

  const category = (editArticleFormElem.elements[
    article.category.toLowerCase()
  ].checked = true);

  const articleBody = CKEDITOR.instances.editor1;
  articleBody.setData(article.body);

  const currentImg = document.querySelector("#current-img");
  currentImg.src = image.imgData;
}

export default renderArticleData;
