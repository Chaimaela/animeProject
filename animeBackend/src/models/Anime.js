const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
        title:{
            type:String,
            required: true
        },
        author:{
            type:String,
            required:true
        }
})

const Anime = mongoose.model("Anime", AnimeSchema);

module.exports={
    Anime
}