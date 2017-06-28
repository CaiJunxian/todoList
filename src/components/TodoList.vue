<template>
  <div class="todoList todoapp">
    <todo-list-header></todo-list-header>
    <todo-list-content></todo-list-content>
    <todo-list-footer></todo-list-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import TodoListFooter from '@/components/Footer'
  import TodoListContent from '@/components/Content'
  import TodoListHeader from '@/components/Header'

  export default {
    name: 'TodoList',
    components: {
      TodoListHeader,
      TodoListContent,
      TodoListFooter
    }
  }
</script>

<style scoped>

</style>
