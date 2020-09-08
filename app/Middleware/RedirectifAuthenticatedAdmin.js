'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class RedirectifAuthenticatedAdmin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, auth, response }, next) {
    // call next to advance the request
    try{
      await auth.check()
      return response.route('admin.dashboardAdmin')
    }
    catch (error){
      // await auth.check()
      //temporary only
      // return response.route('admin/dashboardAdmin')
      await next()
    }
    
  }
}

module.exports = RedirectifAuthenticatedAdmin
