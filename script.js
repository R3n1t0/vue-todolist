
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

      if(this.newTodo.length > 1){
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }
      
    },

    removeTodo(index){
      if(confirm(`Sei sicuro di eliminare: ${this.todos[index]} ?`))
      this.todos.splice(index, 1);
    }

  }

})