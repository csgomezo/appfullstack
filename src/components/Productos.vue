<template>
  <div>
    <Slider texto="Productos"></Slider>
    <h1>Lista de Productos de Valencia App</h1>
    <br />
    <table class="table table-dark col-sm-4 mx-auto table-bordered">
      <thead>
        <th scope="col">Nombre</th>
        <th scope="col">Disponibilidad (Unidad(es))</th>
        <th scope="col">Precio (Unidad)</th>
        <th scope="col">Añadir producto</th>
      </thead>

      <tbody>
        <th scope="col">
          <article v-for="productos in productos" :key="productos.id">
            {{ productos.nombre }}
          </article>
        </th>
        <th scope="col">
          <article v-for="productos in productos" :key="productos.id">
            {{ productos.cantidad }}
          </article>
        </th>
        <th scope="col">
          <article v-for="productos in productos" :key="productos.id">
            {{ productos.precio }}
          </article>
        </th>
        <th scope="col">
          <article v-for="productos in productos" :key="productos.id">
            <router-link :to="'#'">Añadir</router-link>
          </article>
        </th>
      </tbody>
    </table>
  </div>
</template>

<script>
import Slider from "./Slider";
import axios from "axios";
import Global from "../Global";
import EventBus from "./EventBus";
//import swal from "sweetalert";

/*Prueba de que llego el evento*/
EventBus.$on("logged-in", function (test) {
  console.log("Logedin Productos")
  this.authProduct=test;
  console.log(this.authProduct);
});

export default {
  name: "Productos",
  components: {
    Slider,
  },

  data() {
    return {
      productos: null,
      url: Global.url,
      usuario: "",
      authProduct: "",
    };
  },

  methods: {
    getProductos() {
      axios
        .get(this.url + "listarProductos")
        .then((res) => {
          this.productos = res.data.productos;
          console.log(this.productos);
          console.log(this.authProduct)
        })
        .catch((err) => {
          console.log(err); 
        });
    },
  },
  mounted() {
    EventBus.$on("logged-in2", function(status) {
      this.authProduct = status;
    }.bind(this));
    this.getProductos();
  },
};
</script>
