'use strict'

class LoginController {

    index({ view }) {
      return view.render('auth.login')
      


    }
  
    async check({ request, auth, session, response }) {
  
      /**
       * get data from form
       */

      // const Admin = use('App/Models/Admin')
      // if (auth.user instanceof Admin) {
      //   const { email, password } = request.all()
  
    
      //   await auth.attempt(email, password)
  
      //   return response.route('dashboard')
        
        
      // }

      const { email, password } = request.all()
  
      /**
       * attemp auth
       */
      await auth.attempt(email, password)
  
      return response.route('dashboard')
  
    }
  
    async logout({ auth, response }) {
      await auth.logout()
      return response.route('/')
    }
  
  }
  
  module.exports = LoginController
