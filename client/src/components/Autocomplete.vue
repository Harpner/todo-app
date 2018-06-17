<template>
  <ul class="input-group">
    <li class="badge badge-pill mr-1"
        v-for="tag in tags"
        :key="tag.id"
        v-bind:class="tag.color"
        v-on:click="tagClicked(tag)">
      <i class="fas"
         v-bind:class="tag.icon"
         aria-hidden="true"></i>
      {{tag.name}}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      tags: [
        {
          id: 1,
          name: 'Work',
          icon: 'fa-wrench',
          color: 'pink darken-1'
        },
        {
          id: 2,
          name: 'TodoApp',
          icon: 'fa-clipboard-list',
          color: 'green darken-1'
        },
        {
          id: 3,
          name: 'Gaming',
          icon: 'fa-gamepad',
          color: 'red darken-1'
        },
        {
          id: 4,
          name: 'Holiday Dolomity',
          icon: 'fa-helicopter',
          color: 'blue darken-1'
        },
        {
          id: 5,
          name: 'Holiday Libanky',
          icon: 'fa-umbrella',
          color: 'purple darken-1'
        }
      ]
    }
  },
  methods: {
    tagClicked: function (tag) {
      console.log(tag.name)
    }
  }
}
</script>

<style>
ul {
  text-align: left;
  margin: 0;
  padding: 4px;
  list-style-type: none;
  z-index: 1000;
  position: absolute;
  max-height: 400px;
  overflow-y: auto;
  background: #fff;
  width: 100%;
  border: 1px solid #ccc;
  border-top: 0;
  color: #000;
}
li {
  padding: 7px 10px;
  cursor: pointer;
}
li:hover {
  background: rgba(0, 180, 255, 0.075);
}
.badge-pill {
  padding-top: 6px;
  font-size: 1rem;
}
.hidden {
  display: none;
}
</style>
