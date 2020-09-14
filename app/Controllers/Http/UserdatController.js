'use strict'

const varuser = use('App/Models/Userdat');

class UserdatController {

    async index({request, response, view}){
        const userdat = await varuser.all();
    
        return view.render('index', { userdat: userdat.rows })
    }
    
    create({request, response, view}){
        return view.render('create')
    }
    
    async store({request, response, view, session}){
        const varuser1 = new varuser();
    
        varuser1.title = request.input('title');
        varuser1.description = request.input('description');
        await varuser1.save();
    
        session.flash({ notification: 'Successfully create!' });
        return response.route('varuser1.index')
    }
    
    async edit({request, response, view, params}){
        const id = params.id;
        const todo = await Todo.find(id);
    
        return view.render('edit', { todo : todo})
    }
    
    async update({request, response, view, params, session}){
        const id = params.id;
        const todo = await Todo.find(id);
        todo.title = request.input('title');
        todo.description = request.input('description');
        await todo.save();
    
        session.flash({ notification: 'Successfully update!' });
        response.redirect('/')
    }
    
    async delete({request, response, view, params, session}){
        const id = params.id;
        const todo = await Todo.find(id);
        await todo.delete();
    
        session.flash({ notification: 'Successfully delete!' });
        response.redirect('/')
    }
}

module.exports = UserdatController
