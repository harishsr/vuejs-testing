<template>
  <div>
    <h1>My To Do List</h1>
    </br>

    <!-- add new items to the list -->
    <input v-model="newItem">
    <button @click="addItemToList">
      Add
    </button>

    <!-- displays list -->
    <ul>
      <li v-for="item in listItems">
        {{ item }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'list',
  data() {
    return {
      listItems: ['buy food', 'play games', 'sleep'],
      newItem: '',
    };
  },
  methods: {
    addItemToList() {
      this.listItems.push(this.newItem);
      this.newItem = '';
    },
  },
};
</script>

<style>
</style>
