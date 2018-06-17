<template>
  <div class="hello">
    <h1>Register user</h1>

    <input 
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />
    <button
      @click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>
