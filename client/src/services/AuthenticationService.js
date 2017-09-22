import Api from '@/services/Api'

export default {
  register (credentials) {
    console.log('register')
    return Api().post('register', credentials)
  }
}
