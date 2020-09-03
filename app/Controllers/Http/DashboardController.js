'use strict'

class DashboardController {

    index({ view, auth }) {
      const user = auth.user.toJSON()
      return view.render('dashboard', { user: user })
    }
  
  }
  
  module.exports = DashboardController