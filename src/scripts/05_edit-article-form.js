function renderArticleData(editArticleFormElem, article, image) {

  const title = (editArticleFormElem.elements["article-name"].value =
    article.title);

  const author = (editArticleFormElem.elements["author-name"].value =
    article.author);

  const category = (editArticleFormElem.elements[
    article.category.toLowerCase()
  ].checked = true);

  const articleBody = CKEDITOR.instances.editor1.setData(article.body);

  const currentImg = (document.querySelector("#current-img").src =
    image.imgData);
}

export default renderArticleData;
