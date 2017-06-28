<template>
  <div class="main" v-show="todos.length">
    <input type="checkbox" class="toggle-all" id="toggle-all" :checked="allChecked"
           @change="toggleAll({ done: !allChecked })">
    <label for="toggle-all"></label>
    <ul class="todo-list">
      <todo v-for="(todo, index) in filteredTodos" :key="index" :todo="todo"></todo>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import Todo from '@/components/Todo'
  import {mapMutations} from 'vuex'

  const conditions = {
    all: todos => todos,
    active: todos => todos.filter(todo => !todo.done),
    completed: todos => todos.filter(todo => todo.done)
  }

  export default {
    name: 'Content',
    components: {
      Todo
    },
    computed: {
      todos () {
        return this.$store.state.todos
      },
      allChecked () {
        return this.todos.every(todo => todo.done)
      },
      condition () {
        return this.$store.state.condition
      },
      filteredTodos () {
        return conditions[this.$store.state.condition](this.todos)
      }
    },
    methods: {
      addTodo (e) {
        const text = e.target.value.trim()
        if (text) {
          this.$store.commit('addTodo', {text})
        }
        e.target.value = ''
      },
      ...mapMutations([
        'toggleAll'
      ])
    }
  }
</script>

<style scoped>
</style>
