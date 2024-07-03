const Menu = require('../Model/menuModel');

exports.getAllMenu = async () => {
    return await Menu.find();
}

exports.createMenu = async (menuData) => {
    const menu = new Menu(menuData);
    return await menu.save();
}

exports.deleteMenu = async (menuId) => {
    try {
        const menu = await Menu.findById(menuId);
        if (!menu) {
          throw new Error('menu not found');
        }
        return menu.deleteOne();
      } catch (error) {
        throw new Error(`Error deleting menu: ${error.message}`);
      }
}

exports.updatemenu = async (menuId, menuData) => {
    try {
      const updatedMenu = await Menu.findByIdAndUpdate(menuId, menuData, { new: true });
      if (!updatedMenu) {
        throw new Error('menu not found');
      }
      return updatedMenu;
    } catch (error) {
      throw new Error(`Error updating menu: ${error.message}`);
    }
  };