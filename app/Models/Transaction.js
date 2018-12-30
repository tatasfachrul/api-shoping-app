'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Transaction extends Model {
    order () {
    return this.hasMany('App/Models/Order')
    }

}

module.exports = Transaction
