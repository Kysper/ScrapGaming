var mongoose = require("mongoose");

//this is a schema object from mongoose
var Schema = mongoose.Schema;

//create article schema
var ArticleSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    link:{
        type: String,
        required:true
    },
    shortDesc:{
        type: String, default: 'No Description Availiable'
    },
    notes:[{
        type: Schema.Types.ObjectId,
        ref: "Note"   
    }]

});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;