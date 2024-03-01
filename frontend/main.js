const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Fotografica analogica",
      todoList: [],

      newItem: ``,
    };
  },

  methods: {
    fetchTodoList() {
      axios.get(`sito web`).then((responde) => {
        this.todoList = responde.data;
      });
    },

    addTodoItem() {
      console.log(`item da aggiungere:` + this.newItem);
      this.newItem = ``;
    },
  },

  mounted() {
    this.fetchTodoList();
  },
});

app.mount("#app");
