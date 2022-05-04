
const app = new Vue({
  el: "#app",
  data: {
    todos: [
      "Studiare JavaScript",
      "Ripassare JavaScript",
      "Studiare VueJs",
      "Non dimeticare JavaScript"
    ],

    newTodo: ""
  },

  methods:{
    addTodo(){
      this.todos.push(this.newTodo)
    }
  }
})