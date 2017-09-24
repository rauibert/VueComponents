Vue.component('lista-tareas', {
  template: `
    <div>
      <h1><slot></slot></h1>
      <ul>
        <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
      </ul>
    </div>`,
  data(){
    return {
      tareas:[
        'Seguir curso Vue',
        'Continuar web en Laravel',
        'Estudiar inglés',
        'Proseguir con PhoneGap'
      ]
    }
  }
});

Vue.component('tarea', {
  props: ['tarea'],
  template: `
    <li>{{ tarea }}</li>
    `
});

Vue.component('contacto', {
  template: `
    <div><a href="mailto:prueba@prueba.com">prueba@prueba.com</a><hr></div>
    `
});

Vue.component('bio', {
  template: `
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eaque dolores odio maxime optio culpa quod,
        velit architecto adipisci voluptatum repudiandae nobis molestias laudantium obcaecati in assumenda perspiciatis repellendus dicta.
      </p>
    </div>
    `
});

new Vue({
  el:'main',
  data:{
    seleccionado:'lista-tareas'
  }
});
