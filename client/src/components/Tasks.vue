<template>
  <div class="hello">
    <h1>All Tasks</h1>

    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        {{task.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import TaskService from '@/services/TaskService'
export default {
  data () {
    return {
      tasks: null
    }
  },
  async mounted () {
    this.tasks = (await TaskService.getTasks()).data
  }
}
</script>

<style scoped>
</style>
