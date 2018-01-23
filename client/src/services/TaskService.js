import Api from '@/services/Api'

export default {
  createTask (task) {
    console.log('createTask')
    return Api().post('createTask', task)
  },
  getTasks () {
    console.log('getTasks')
    return Api().get('getTasks')
  }
}
