<template>
  <div class="hello">
    <h1>Create Task</h1>

    <input 
      type="text"
      name="title"
      v-model="title"
      placeholder="Title..." />
    <button
      @click="createTask">
      Create Task
    </button>
  </div>
</template>

<script>
import TaskService from '@/services/TaskService'
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    async createTask () {
      try {
        await TaskService.createTask({
          title: this.title,
          status: 'New'
        })
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
