    const {Anime} = require('../models/Anime')


    const createAnime = async (req, res) => {
        
    try {
        const {title, author} = req.body
        const anime = new Anime({
            title,
            author,
        })

        const result = await anime.save()
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'something is wrong'})
        
    }
}

module.exports = createAnime