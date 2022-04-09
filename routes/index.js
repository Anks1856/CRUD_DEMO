const { Router } = require('express');
const { isAuth } = require('../middleware/auth');
const router = Router();

const authRouter = require('./auth.route');
const userRouter = require('./user.route');

router.use('/auth' , authRouter);
router.use('/user' ,isAuth, userRouter);

module.exports = router;