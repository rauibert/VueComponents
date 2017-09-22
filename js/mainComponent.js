const puenteEventos = new Vue(); //Nos sirve para comunicarnos entre componentes

Vue.component('listado-productos', {
  props: ['productos'],
  template: `
  <section>
    <ul>
      <li v-for="producto in productos">
        {{ producto.nombre }}
        <small>{{ producto.precio.toFixed(2) }} €</small>
        <button @click="eliminarProducto(producto.precio)">-</button>
        <button @click="agregarProducto(producto.precio)">+</button>
      </li>
    </ul>
  </section>
  `,
  methods: {
    agregarProducto(precio){
      puenteEventos.$emit('añadir', precio);
    },

    eliminarProducto(precio){
      puenteEventos.$emit('eliminar', precio);
    },
  }
});

Vue.component('carrito-compra', {
  template: `
    <section>
      <h1>{{ total.toFixed(2) }} €</h1>
      <h3>{{ cantidadProductos }} productos</h3>
  `,
  data(){
    return {
      cantidadProductos: 0,
      total: 0,
    }
  },
  created(){
    puenteEventos.$on('añadir', (precio) =>{
      if(this.total>=0){
        this.total +=precio;
        this.cantidadProductos++;
      }

    });
    puenteEventos.$on('eliminar', (precio) =>{
      if(this.total>0){
        this.total -=precio;
        this.cantidadProductos--;
      }

    });
  }
});

new Vue({
  el: 'main',
  data: {
    productos: [
      {nombre: 'Libro 1', precio: 39},
      {nombre: 'Libro 2', precio: 1139},
      {nombre: 'Libro 3', precio: 3},
      {nombre: 'Libro 4', precio: 90},
      {nombre: 'Libro 5', precio: 19},
    ]
  }
});
