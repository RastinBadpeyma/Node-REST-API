const express = require('express');
const ArticlesRouter = express.Router();

const {
  GetAllArticle,
  PostArticle,
  GetArticleByID,
  UpdateArticle,
  DeleteArticle
} = require('./../controllers/article.controller');



ArticlesRouter.get('/' ,GetAllArticle);
ArticlesRouter.get('/:id' , GetArticleByID)
ArticlesRouter.post('/' ,PostArticle);
ArticlesRouter.put('/:id' ,UpdateArticle)
ArticlesRouter.delete('/:id' , DeleteArticle)

module.exports = ArticlesRouter;


