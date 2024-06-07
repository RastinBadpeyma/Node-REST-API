const express = require('express');
const ArticlesRouter = express.Router();

const {
  GetAllArticle,
  PostArticle,
  GetArticleByID,
  UpdateArticle
} = require('./../controllers/article.controller');



ArticlesRouter.get('/' ,GetAllArticle);
ArticlesRouter.get('/:id' , GetArticleByID)
ArticlesRouter.post('/' ,PostArticle);
ArticlesRouter.put('/:id' ,UpdateArticle)

module.exports = ArticlesRouter;


