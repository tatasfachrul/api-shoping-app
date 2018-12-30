'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionsSchema extends Schema {
  up () {
    this.alter('transactions', (table) => {
      table.increments()
      table.integer('total').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('transactions')
  }
}
// 1546061218635_transactions_schema.js
module.exports = TransactionsSchema
