"use strict";
const Order = use("App/Models/Order");

class OrderController {
  // async index({ response }) {
  //   const data = await Order.all();
  //   return response.json(data);
  // }

  async index() {
    return await Order.query()
      .with("product")
      .fetch();
  }

  async store({ request, response }) {
    const data_request = request.all();
    const order = new Order();
    order.product_id = data_request.product_id;
    order.qty = data_request.qty;
    order.price = data_request.price;
    order.transaction_id = data_request.transaction_id;
    await order.save();
    return response.json({ status: true, message: "Insert Success" });
  }

  async update({ params, request, response }) {
    const id = params.id;
    const data_request = request.all();
    const order = await Order.findBy("id", id);
    if (!order) {
      return response.json({ status: false, message: "Id Not Found" });
    } else {
      // order.product_id = data_request.product_id;
      order.qty = data_request.qty;
      order.price = data_request.price;
      order.transaction_id = data_request.transaction_id;
      await order.save();
      return response.json({ status: true, message: "Update Success" });
    }
  }

  async delete({ params, response }) {
    const id = params.id;
    const order = await Order.findBy("id", id);
    if (!order) {
      return response.json({ status: false, message: "Id Not Found" });
    } else {
      await order.delete();
      return response.json({ status: true, message: "Delete Success" });
    }
  }
}

module.exports = OrderController;
