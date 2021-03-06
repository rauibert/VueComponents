Vue.component('mis-tareas', {
  props: ['listado'],
  template: '#mis-tareas-template'
});

// El slot crea un contenido por defecto

Vue.component('alerta', {
  props: ['tipo', 'posicion'],
  template:
    `<section class="alerta" :class="[tipo, posicion]">
      <header class="alerta__header">
        <slot name="header">
          Hola
        </slot>
        <a href="#" @click="ocultarComp">Cerrar</a>
      </header>
      <div class="alerta__contenido">
        <slot>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et cupiditate architecto fugit quibusdam voluptates in doloremque laudantium blanditiis eius saepe officiis, aspernatur unde ducimus, perferendis, officia rem minima, omnis accusantium.
        </slot>
      </div>
      <footer class="alerta__footer">
        <slot name="footer">
          Esto es el footer
        </slot>
      </footer>
    </section>`,
    methods: {
      ocultarComp(){
        this.$emit('ocultar');
      }
    }
});

new Vue({
  el: 'main',
  data: {
    tareas: [
      {titulo: 'Salir a correr'},
      {titulo: 'Recoger la casa'},
      {titulo: 'Ir al gym'},
      {titulo: 'Comprar el periodico'},
      {titulo: 'Desayunar'}
    ],
    mostrarExito: false
  }
});
