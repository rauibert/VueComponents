Vue.component('elegir-ganador',{
    props: ['listado'],
    template: '#elegir-ganador-template',
    methods: {
      elegirGanador() {
        let cantidad = this.participantes.length;
        let indice = Math.floor(Math.random() * cantidad);
        this.ganador = this.participantes[indice-1];
      }
    },
    data() {
      return {
        ganador: false,
        participantes: this.listado
      }
    }
});

Vue.component('mis-tareas',{
  props:['tareas'],
  template: `<ul><li v-for="tarea in tareas">{{ tarea.title }}</li></ul>`
});

new Vue({
  el: 'main',
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((respuesta)=>{
        this.tareasAjax = respuesta.data;
      });
  },
  data: {
    tareasAjax:[],
    personas: ['Juan', 'Alicia', 'Pedro', 'Javier', 'Marcos']

  }
});
