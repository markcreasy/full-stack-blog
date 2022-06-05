// router initialization
const router = require('express').Router();

// custom routes
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');

// configure router to use custom routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// export router
module.exports = router;
