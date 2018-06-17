<template>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <btn color="primary">New Tag</btn>
      </div>
      <div class="col-8 text-center">
        <searchBar />
      </div>
      <div class="col text-center">
        <btn color="primary">New Task</btn>
      </div>
    </div>
  </div>
</template>

<script>
import { Btn } from 'mdbvue'
import SearchBar from '@/components/SearchBar'
export default {
  components: {
    Btn,
    SearchBar
  }
}
</script>

<style>
@media (min-width: 1900px) {
  .container {
    max-width: 1840px;
  }
}
</style>
