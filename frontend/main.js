const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Fotografica analogica",

      // la todoList è vuota perchè non la voglio statica, ma deve fornirmela il backend (interrogando API)
      todoList: [],

      // tengo traccia di cosa aggiunge l'utente
      newItem: ``,
    };
  },

  methods: {
    fetchTodoList() {
      // faccio una chiamata axios all'API
      axios.get(`../backend/api/get-list.php`).then((response) => {
        this.todoList = response.data;
      });
    },

    // ha il compito di aggiungere in item, e poi di svuotare l'input
    addTodoItem() {
      const item = this.newItem;
      console.log(`item da aggiungere:` + item);

      this.newItem = ``;

      // invio il nuovo item inserito
      const data = {
        params: { item },
      };

      // axios POST: header che conterrà un oggetto con una coppia chiave-valore Content-Type multipart/form-data
      const params = {
        headers: { `Content-Type`: `multipart/form-data` },
      };

      axios
      .post(`../backend/api/store-item.php`, data, params)
      .then ((respone) => {
        console.log(respone.data);
      });
    },
  },

  mounted() {
    this.fetchTodoList();
  },
});

app.mount("#app");
