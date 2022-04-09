const { Router } = require('express');
const router = Router();

const UserController = require('../controller/user.controller');
const { isAuth } = require('../middleware/auth');

router.get('/' ,isAuth, (req, res) => {
    res.send("user router")
})

router.get('/getAll', UserController.getAll);
router.put('/:id/update', UserController.updateUser);
router.delete('/:id/delete',UserController.deleteUser);
router.post('/uploadImage' , UserController.uploadProfileImage);
module.exports = router;
