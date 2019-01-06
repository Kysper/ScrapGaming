const express = require('express');
const axios = require('axios');
const router = express.Router();
let cheerio = require('cheerio');
let db = require('../models');

router.get('/', function (req, res) {
  db.Article.find({})
    .exec(function (err, docs) {
      console.log('pull all articles', docs)
      res.render('home', {
        articles: docs
      })
    });

  router.get('/articles', function (req, res) {
    db.Article.find({})
      .exec(function (err, docs) {
        if (err) console.log(err);
          console.log('Article Already In DB')
          console.log('pull only saved articles', docs)
          res.render('articles', {
            articles: docs
          })
      })
  })



});

router.get("/scrape", function (req, res) {
  axios.get('https://www.howtogeek.com/t/gaming/').then(function (response) {
    var $ = cheerio.load(response.data);
    $("article").each(function (i, element) {
      var result = {};

      result.title = $(this)
        .find("h2")
        .text()
      result.link = $(this)
        .children("a")
        .attr("href")
      result.shortDesc = $(this)
        .find('.entry-content')
        .text()
        if(result != null){
          console.log('Article in DB')
        }
      db.Article.create(result)
        .then(function (dbArticle) {

          console.log(dbArticle);
        })
        .catch(function (err) {

          console.log(err);
        })
    })
    res.redirect('/')
  })
});
router.get("/articles/delete/:id", function (req, res) {
  db.Article.findOneAndDelete({ _id: req.params.id })
    .populate("note")
    .then(function (dbArticle) {
    })
  res.redirect('/')
});

// router.get("/articles/save/:id", function (req, res) {
//   console.log(res)
//   db.Article.findOneAndUpdate({ _id: req.params.id })
//     .populate("note")
//     .catch(function (err) {
//       res.json(err)
//     })
//   res.redirect('saved')
// });


// router.post("/saved/:id", function (req, res) {
//   db.Note.create({})
//     .exec(function (dbNote){
//        db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote.id }, { new: true });
//        console.log('Note Created!')
//       })
//       res.render('saved')
// })

router.get('/notes', function (req, res) {
  res.render('notes')
})


module.exports = router;