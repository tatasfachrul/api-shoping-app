'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {

    // User route
    Route.post('register', 'UserController.register')
    Route.post('login', 'UserController.login')

    // Products
    Route.get('products', 'ProductController.index')//.middleware('auth')
    Route.post('product', 'ProductController.store')

    // Orders
    Route.get('orders', 'OrderController.index')
    Route.post('order', 'OrderController.store')
    Route.patch('order/:id', 'OrderController.update')
    Route.delete('order/:id', 'OrderController.delete')

    // Transaction
    Route.post('transaction', 'TransactionController.store')
    Route.get('transaction/:id', 'TransactionController.show')


}).prefix('api/v1')
