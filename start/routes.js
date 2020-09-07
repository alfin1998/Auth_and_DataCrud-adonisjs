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

Route.on('/').render('auth/login')
/**
* register
*/
Route.get('register', 'Auth/RegisterController.index').as('register.index').middleware(['RedirectIfAuthenticated'])
Route.post('register', 'Auth/RegisterController.store').as('register.store').middleware(['RedirectIfAuthenticated'])

/**
* login
*/
// Route.get('login', 'Auth/LoginController.index').as('login.index').middleware(['RedirectIfAuthenticated', 'auth:admin'])
Route.get('login', 'Auth/LoginController.index').as('login.index').middleware(['RedirectIfAuthenticated'])
Route.post('login', 'Auth/LoginController.check').as('login.check').middleware(['RedirectIfAuthenticated'])
Route.get('logout', 'Auth/LoginController.logout').as('logout').middleware(['Authenticate'])

/**
* dashboard
*/
Route.get('dashboard', 'DashboardController.index').as('dashboard').middleware(['Authenticate'])

// CRUD
Route.get('/index', 'TodoController.index').as('Todo.index')
Route.get('/create', 'TodoController.create').as('Todo.create')
Route.get('/edit/:id', 'TodoController.edit').as('Todo.edit')
Route.get('/delete/:id', 'TodoController.delete').as('Todo.delete')
Route.post('/store', 'TodoController.store').as('Todo.store')
Route.post('/update/:id', 'TodoController.update').as('Todo.update')

// Route.get('dashboard', ({ session }) => {
//     return session.get('username') 
//   })

//Admin
Route.get('loginadmin', 'Admin/LoginadminController.index').as('loginadmin.index').middleware(['RedirectifAuthenticatedAdmin'])
Route.post('loginadmin', 'Admin/LoginadminController.check').as('loginadmin.check').middleware(['RedirectifAuthenticatedAdmin'])
Route.get('dashboardAdmin', 'Admin/DashboardAdminController.index').as('dashboardAdmin').middleware(['Authenticate'])



// start | Routes.js
// Route.group(() => {
//     Route.post("/user-register", "UserController.register");
//     Route.post("/user-login", "UserController.login");
//   });
  
//   Route.group(() => {
//     Route.get("/admin/login", "TodoController.index");
//     // Route.post("login", "TodoController.create");
//   }).middleware("auth");
  
//   Route.group(() => {
//     Route.delete("/todo", "TodoController.delete");
//   }).middleware(["auth", "admin"]);