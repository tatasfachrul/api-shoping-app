'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('price').notNullable()
      table.string('image_url').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

// 1546061191012_products_schema.js
module.exports = ProductsSchema
