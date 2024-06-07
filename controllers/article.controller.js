const Article = require('../Models/article');


async function GetAllArticle(req, res) {
   try {
      const articles = await Article.find()
      res.json(articles)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
}

async function PostArticle(req,res){
    try {
      const {title , body } = req.body;

      if (!title || !body ) {
        return res.status(400).json({message : 'All fields are required'});
      }

      const existingArticle = await Article.findOne({title});
      if(existingArticle){
      return res.status(400).json({message : 'Article already exists'});
   }

   const newArticle = new Article({ title, body});
   await newArticle.save();
      res.status(201).json({message:"article was posted"});
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
}

module.exports = {
   GetAllArticle,
   PostArticle,
}