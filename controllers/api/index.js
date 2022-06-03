// Router initialization
const router = require('express').Router();

// include custom routes
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');

// setup top level routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

// export router
module.exports = router;
