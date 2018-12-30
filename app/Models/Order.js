'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
    // transcation(){
    //     return this.belongsTo('App/Models/Transaction')
    // }

    product(){
        return this.belongsTo('App/Models/Product')
    }
}

module.exports = Order
