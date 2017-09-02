Vue.component('autor',{
  props: ['nombre'],
  data: function(){
    return {nombreAutor: this.nombre }
  },
  mounted(){
    console.log(this.nombre);
  },
  template: `<div><h1>{{ nombreAutor }}</h1><button @click="cambiarProp">Cambiar Prop</button></div>`,

  methods: {
    cambiarProp() {
      this.nombreAutor = this.nombreAutor.toUpperCase();
    }
  }
});

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
    personas: ['Juan', 'Alicia', 'Pedro', 'Javier', 'Marcos'],
    autor: 'Raul',
    nombreAutor:''

  }
});
