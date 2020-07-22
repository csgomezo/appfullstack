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
          <article v-for="productos in productos" :key="productos.id">{{productos.nombre}}</article>
        </th>
        <th scope="col">
          <article v-for="productos in productos" :key="productos.id">{{productos.cantidad}}</article>
        </th>
        <th scope="col">
          <article v-for="productos in productos" :key="productos.id">{{productos.precio}}</article>
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
//import swal from "sweetalert";
export default {
  name: "Productos",
  components: {
    Slider
  },
  methods: {
    getProductos() {
      axios
        .get(this.url + "listarProductos")
        .then(res => {
          this.productos = res.data.productos;
          console.log(this.productos);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getProductos();
  },
  data() {
    return {
      productos: null,
      url: Global.url
    };
  }
};
</script>