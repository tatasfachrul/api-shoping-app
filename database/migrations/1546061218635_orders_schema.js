'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.integer('product_id').notNullable().unsigned().references('id').inTable('products')
      table.integer('qty').notNullable()
      table.integer('price').notNullable()
      table.integer('transaction_id').notNullable().unsigned().references('id').inTable('transactions')
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}
//1546061200108_orders_schema.js
module.exports = OrdersSchema
