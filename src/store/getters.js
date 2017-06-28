/**
 * Created by sysu_ on 2017/6/28.
 */
export const getters = {

  allTodos: state => state.todos,

  activeTodos: state => state.todos.filter(todo => !todo.done),

  completedTodos: state => state.todos.filter(todo => todo.done)

}
