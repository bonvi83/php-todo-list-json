const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Fotografica analogica",

      // la todoList è vuota perchè non la voglio statica, ma deve fornirmela il backend (interrogando API)
      todoList: [],

      newItem: ``,
    };
  },

  methods: {
    fetchTodoList() {
      // faccio una chiamata axios all'API
      axios
        .get(
          `http://localhost:8888/04-PHP-ToDo-List-JSON/backend/api/get-list.php`
        )
        .then((responde) => {
          this.todoList = responde.data;
        });
    },

    addTodoItem() {
      console.log(`item da aggiungere:` + this.newItem);
      this.newItem = ``;

      axios.post(`sito web`, {
        params: {
          item,
        },
      });
    },
  },

  mounted() {
    this.fetchTodoList();
  },
});

app.mount("#app");
