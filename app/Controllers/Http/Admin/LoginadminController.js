'use strict'

class LoginadminController {


    index({ view, response,  request}) {
        return view.render('admin.loginadmin')
        
      }
    
      async check({ request, auth, session, response }) {
    
      
  
        const { email, password } = request.all()
    
        /**
         * attemp auth
         */
        await auth.attempt(email, password)
    
        return response.route('dashboardAdmin')
    
      }
    
      async logout({ auth, response }) {
        await auth.logout()
        return response.route('/')
      }
}

module.exports = LoginadminController
