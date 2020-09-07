'use strict'

class LoginadminController {


    index({ view }) {
        return view.render('admin.login')
        
      }
    
      async check({ request, auth, session, response }) {
    
      
  
        const { email, password } = request.all()
    
        /**
         * attemp auth
         */
        await auth.attempt(email, password)
    
        return response.route('admin/dashboardAdmin')
    
      }
    
      async logout({ auth, response }) {
        await auth.logout()
        return response.route('/')
      }
}

module.exports = LoginadminController
