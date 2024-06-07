const express = require('express');
const ArticlesRouter = express.Router();

const {
  GetAllArticle,
  PostArticle,
} = require('./../controllers/article.controller');



ArticlesRouter.get('/' ,GetAllArticle);

ArticlesRouter.post('/' ,PostArticle);


module.exports = ArticlesRouter;


