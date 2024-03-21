const {Anime} = require('../models/Anime')

const updateAnime = async (req,res)=>{
    const  { id } = req.params;
    const {title, author} = req.body;

    try {
        const anime = await Anime.findByIdAndUpdate(id, {title,author},{ new: true }); // new bach yrj3 li object jdid

        res.status(200).json(anime)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"something went wrong"})
    }

}

module.exports= updateAnime