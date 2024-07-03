const Order = require('../Model/orderModel')

exports.createOrder = async (orderData) => {
    const order = new Order(orderData);
    return await order.save()
}

exports.getAllOrder = async () => {
    return await Order.find();
}

exports.orderGetById = async (customerId) => {
    const order = await Order.findById(customerId);
    if(!order){
        throw new Error('Order list not found')
    }

    return order;
}

exports.orderDelete = async (orederId,customerId) => {
    const order = await Order.findById(orederId);
    const orderWithCustomer = await Order.findById(customerId)
}