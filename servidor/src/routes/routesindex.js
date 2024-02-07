const router = require('express').Router();
const postsRouter = require('./rutasPosts/rutasPosts');

router.use('/posts', postsRouter);

module.exports = router;