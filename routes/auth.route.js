const { Router } = require('express');
const router = Router();

const AuthController = require('../controller/auth.controller');

router.get('/' , (req, res) => {
    res.send("Auth route");
})
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);


module.exports = router;