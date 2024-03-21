const {Anime} = require('../models/Anime')
 const deleteAnime = async (req,res)=>{
    const {id} = req.params;
    console.log("hello delete")
    try {
        const anime = await Anime.findByIdAndDelete(id)
        console.log(anime);
        if(anime){
            res.status(201).json({msg: "Anime has been deleted"});
        }
        else{
            res.status(404).json({msg: "Anime not found"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "something went wrong"})
    }
    
 }

 module.exports = deleteAnime