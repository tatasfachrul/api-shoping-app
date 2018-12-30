"use strict";
const Transaction = use("App/Models/Transaction");

class TransactionController {
  async store({ request, response }) {
    // const data_request = request.all();
    // const transaction = new Transaction();
    // transaction.total = data_request.total;
    // await transaction.save();
    // return response.json({ status: true, message: "Insert Success", transaction });

    const transaction = await Transaction.create(request.all())
    return transaction
  }

  async show({ params }) {
    return await Transaction.query()
      .where("id", params.id)
      .with("order")
      .first();
  }
  // async show({ params, response }) {
  //   const id = params.id;
  //   const transaction = await Transaction.findBy("id", id).order().fetch();
  //   if (!transaction) {
  //     return response.json({ status: false, message: "Id Not Found" });
  //   } else {
  //     return response.json(transaction);
  //   }
  // }
}

module.exports = TransactionController;
