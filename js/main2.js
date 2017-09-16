Vue.component('candidato', {
  /*props: ['nombre','correoe', 'imagen'],*/
  props: {
    nombre: {
      type: [String, Array], //null para que sea de cualquier tipo
      required: true,
    },
    correoe: {
      type: String,
      default: "uncorreo@mail.es"
    },
    imagen: String,
    location: {
      type: Object,
      default() {
        return {
          ciudad: "Madrid"
        }
      }
    }
  },
  template: '#candidato-template',
});

new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos: [],
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=100')
                .then((respuesta) => {
                    this.candidatos = respuesta.data.results;
                });
        }
    }
});
