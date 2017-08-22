const moviesController = require('../controllers/movies-controller');








movieRoutes.get('/', moviesController.index);
