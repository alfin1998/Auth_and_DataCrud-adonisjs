'use strict'

class DashboardAdminController {

    index({ view, auth }) {
        const admin = auth.admin.toJSON()
        return view.render('admin/dashboardAdmin', { user: admin })
      }
}

module.exports = DashboardAdminController
