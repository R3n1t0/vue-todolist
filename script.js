const app = new Vue({
  el: "#app",
  data: {
    todos: [
      {
        daFare: "Studiare JavaScript",
        fatto: false
      },
      {
        daFare: "Ripassare JavaScript",
        fatto: false
      },
      {
        daFare: "Studiare VueJs",
        fatto: false
      },
      {
        daFare: "Non dimeticare JavaScript",
        fatto: false
      },
      {
        daFare: "Ripassa VueJs",
        fatto: false
      }
      
    ],

    newTodo:{
      daFare: "",
      fatto: false
    },

   

  },

  methods:{

    addTodo(){

      if(this.newTodo.daFare.length > 1){
        this.todos.push(this.newTodo.daFare);
        this.newTodo.daFare = "";
      }
      
    },

    removeTodo(index){
      if(confirm(`Sei sicuro di eliminare: ${this.todos[index]} ?`))
      this.todos.splice(index, 1);
    },

    addClass(index){
      this.todos[index].fatto = true;

    },
    

  }

})