<template>
  <div class="header">
    <h1>todos</h1>
    <input type="text" class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
           @keyup.enter="addTodo">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Header',
    methods: {
      addTodo (e) {
        const text = e.target.value.trim()
        if (text) {
          this.$store.commit('addTodo', {text})
        }
        e.target.value = ''
      }
    }
  }
</script>

<style scoped>
  .new-todo {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }
</style>
