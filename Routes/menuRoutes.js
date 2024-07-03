const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.get('/show/menu',menuController.getAllMenus);
router.post('/add/menu', menuController.createMenu);
router.delete('/delete/menu/:id', menuController.deleteMenu);
router.put('/update/menu/:id',menuController.updateMenu);


module.exports = router;