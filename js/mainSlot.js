// El slot crea un contenido por defecto

Vue.component('alerta', {
  props: ['tipo', 'posicion'],
  template:
    `<section class="alerta" :class="[tipo, posicion]">
      <header class="alerta__header">
        <slot name="header">
          Hola
        </slot>
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
});

new Vue({
  el: 'main',
});
