const {Task} = require('../models')

module.exports = {
  async createTask (req, res) {
    try {
      const task = await Task.create(req.body)
      res.send(task.toJSON())
    } catch (err) {
      res.status(500).send({
        error: 'Unable to create task.'
      })
    }
  },
  async getTasks (req, res) {
    try {
      const tasks = await Task.findAll()
      res.send(tasks)
    } catch (err) {
      res.status(500).send({
        error: 'Unable to get tasks.'
      })
    }
  }
}
