// Router initialization
const router = require('express').Router();

// include custom routes
const userRoutes = require('./user-routes.js');

// setup top level routes
router.use('/users', userRoutes);

// export router
module.exports = router;
