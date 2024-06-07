const express = require('express');
const ArticlesRouter = express.Router();

const {
  GetAllArticle,
  PostArticle,
  GetArticleByID,
} = require('./../controllers/article.controller');



ArticlesRouter.get('/' ,GetAllArticle);
ArticlesRouter.get('/:id' , GetArticleByID)
ArticlesRouter.post('/' ,PostArticle);


module.exports = ArticlesRouter;


