const {Anime} = require('../models/Anime')
//get all animes
const getAllAnime = async (req,res)=>{
   try {
    const anime = await Anime.find().sort({title:1}) // sort if we want data orderd
    res.status(200).json(anime)
   } catch (error) {
        res.status(500).json({msg: 'something went wrong'})
   }
}


//get one anime
  const getAnime= async(req,res)=>{
    const {id}= req.params
   try {
    const anime = await Anime.findById(id)
    if(anime){
        res.status(200).json(anime)
    }
    else{
        res.status(404).json({msg: "Anime not found"})
    }
   } catch (error) {
        console.log(error);
        res.status(500).json({messgae: "something went wrong"})
   }
  }

module.exports = {
    getAllAnime, 
    getAnime,
}