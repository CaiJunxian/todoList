<template>
  <div class="footer" v-show="todos.length">
    <span class="todo-count">
      <strong>{{remaining}}</strong>
      {{remaining | pluralize('item')}} left
    </span>
    <ul class="filters">
      <li v-for="(val, index) in conditions">
        <a href="javascript:;" :class="{ selected: visibility === val }" @click="changeVisibility(val)">{{val | capitalize}}</a>
      </li>
    </ul>
    <button class="clear-completed" v-show="todos.length > remaining" @click="clearCompleted">
      Clear completed
    </button>
  </div>
</template>

<script type="text/ecmascript-6">

  import {mapMutations} from 'vuex'

  export default {
    name: 'Footer',
    data () {
      return {
        visibility: 'all',
        conditions: [
          'all',
          'completed',
          'active'
        ]
      }
    },
    computed: {
      todos () {
        return this.$store.state.todos
      },
      allChecked () {
        return this.todos.every(todo => todo.done)
      },
      remaining () {
        return this.todos.filter(todo => !todo.done).length
      }
    },
    methods: {
      ...mapMutations([
        'clearCompleted',
        'toggleCondition'
      ]),
      changeVisibility (condition) {
        this.visibility = condition
        this.toggleCondition(condition)
      }
    },
    filters: {
      pluralize: (n, w) => n === 1 ? w : (`${w}s`),
      capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
    }
  }
</script>

<style scoped>
</style>
