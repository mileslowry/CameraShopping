const router = require('express').Router(),
  apiRoutes = require('./apiRoutes'),
  homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes)
router.use('/', homeRoutes);

module.exports = router;
