"use strict";
const Product = use("App/Models/Product");

class ProductController {
  async index({ response }) {
    const data = await Product.all();
    return response.json(data);
  }

  async store({ request, response }) {
    const data_request = request.all();
    const product = new Product();
    product.name = data_request.name;
    product.price = data_request.price;
    product.image_url = data_request.image_url;
    await product.save();
    return response.json({ status: true, message: "Insert Success" });
  }
}

module.exports = ProductController;
