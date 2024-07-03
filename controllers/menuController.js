const Menu = require('../Model/menuModel');
const menuService = require('../services/menuService');

exports.getAllMenus = async (req, res) => {
    try{
        const menus = await menuService.getAllMenu();
        res.status(200).json(menus);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.createMenu = async (req,res) => {
    try{
        console.log("run")
        const newMenu = await menuService.createMenu(req.body);
        res.status(201).json(newMenu)
    } catch(error) {
        res.status(500).json ({message : error.message});
    }
}

exports.deleteMenu = async (req, res) => {
    try{
        const menuId = req.params.id;
        const deleteMenu = await menuService.deleteMenu(menuId)
        res.status(200).json(deleteMenu);
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.updateMenu = async (req, res) => {
    try {
        const menuId = req.params.id;
        const menuData = req.body; 
        const updateMenu = await menuService.updatemenu(menuId, menuData);
        res.status(200).json({ message: 'menu updated successfully', Customer: updateMenu });
      } catch (error) {
        res.status(500).json({ message: 'Error updating menu', error: error.message });
      }
}