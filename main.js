const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Fotografica analogica",
      todoList: [
        `borsa attrezzatura`,
        `controllo meccanico avanzamento rollino`,
        `pulizia obiettivi`,
        `rollini Kodak`,
        `rollini Il Ford`,
        `contenitori per sviluppo`,
        `liquido sviluppo`,
        `liquido STOP`,
        `liquido fissativo`,
        `contenitori pellicola`,
      ],
    };
  },
});

app.mount("#app");
