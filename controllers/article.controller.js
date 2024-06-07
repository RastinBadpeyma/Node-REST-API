const Article = require('../Models/article');


async function GetAllArticle(req, res) {
   try {
      const articles = await Article.find()
      res.json(articles)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
}

async function GetArticleByID(req ,res){
   try {
      const {id} = req.params;
      const article = await Article.findById(id);
      res.status(200).json(article);
  } catch (error) {
      res.status(500).json({message: error.message})
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

async function UpdateArticle(req , res){
   try {
      const { id } = req.params;
      const { title, body} = req.body;
   
      const existingArticle = await Article.findById(id);
      if (!existingArticle) {
          return res.status(400).json({ message: 'We could not find any article with the provided ID.' });
      }
   
      if (title !== existingArticle.title) {
          const existingArticle = await Article.findOne({ title });
          if (existingArticle) {
              return res.status(400).json({ message: 'Article already exists.' });
          }
      }

   
      const updatedArticle = await Article.findByIdAndUpdate(id, { title, body}, { new: true });
      res.status(200).json({ message: "Article was updated" });
   } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ message: "An unexpected error occurred while updating the article." });
   }
}


async function DeleteArticle(req ,res){
   try {
      const {id} = req.params;

      const existingArticle = await Article.findByIdAndDelete(id);
      if(!existingArticle){
       return res.status(400).json({message : `we could Not find any article with this ID: ${id}` });
      }
      res.status(200).json({message : `article with ID : ${id} was deleted`});
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
}

module.exports = {
   GetAllArticle,
   PostArticle,
   GetArticleByID,
   UpdateArticle,
   DeleteArticle
}