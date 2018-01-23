const AuthenticationController = require('./controllers/AuthenticationController')
const TaskController = require('./controllers/TaskController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/createTask',
    TaskController.createTask)
  app.get('/getTasks',
    TaskController.getTasks)
}
