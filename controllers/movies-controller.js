const Movie = require('../models/movie');

const moviesController = {};

moviesController.index = (req, res) => {
    Movie.findAll()
        .then(movies => {
        res.json({
        message: 'ok',
        data: movies,
    });
}).catch(err => {
        console.log(err);
    res.status(500).json(err);
});
}

module.exports = moviesController;
