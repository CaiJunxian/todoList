<template>
  <li class="todo" :class="{ completed: todo.done, editing: editing }">
    <div class="">
      <input type="checkbox" class="toggle" :checked="todo.done" @change="toggleTodo({ todo: todo })">
      <label v-text="todo.text" @dblclick="editing = true"></label>
      <button class="destroy" @click="deleteTodo({ todo: todo })"></button>
    </div>
    <input type="text" class="edit" v-show="editing" v-focus="editing" :value="todo.text" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" @blur="doneEdit">
  </li>
</template>

<script type="text/ecmascript-6">

  import {mapMutations} from 'vuex'

  export default {
    name: 'Todo',
    data () {
      return {
        editing: false
      }
    },
    props: ['todo'],
    methods: {
      doneEdit (e) {
        const value = e.target.value.trim()
        const {todo} = this
        if (!value) {
          this.deleteTodo({
            todo
          })
        } else if (this.editing) {
          this.editTodo({
            todo,
            value
          })
        }
        this.editing = false
      },
      cancelEdit (e) {
        e.target.value = this.todo.text
        this.editing = false
      },
      ...mapMutations([
        'editTodo',
        'toggleTodo',
        'deleteTodo'
      ])
    },
    directives: {
      focus (el, {value}, {context}) {
        if (value) {
          context.$nextTick(() => {
            el.focus()
          })
        }
      }
    }
  }
</script>

<style scoped>
</style>
