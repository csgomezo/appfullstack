<template>
  <div class="container">
    <img src="../assets/img/mushapalatto.jpg" width="200px" />

    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form @submit.prevent="login()" class="form-signin">
          <h1 class="h3 mb-3 font-weigth-normal">Por favor inicia sesión</h1>
          <div class="form-group">
            <label for="correo">Dirección de correo</label>
            <input
              type="email"
              v-model="correo"
              class="form-control"
              name="correo"
              placeholder="Ingrese su correo"
            />
          </div>
          <div class="form-group">
            <label for="contrasenna">Contraseña</label>
            <input
              type="password"
              v-model="contrasenna"
              class="form-control"
              name="contrasenna"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <button class="btn btn-lg btn-primary btn-block">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global";
import EventBus from "./EventBus.vue";
import swal from 'sweetalert'

export default {
  name: "SingIn",
  data() {
    return {
      url: Global.url,
      correo: '',
      contrasenna: '',
    };
  },
  methods: {
    login() {
      axios
        .post(this.url + "login",{
          correo:this.correo, contrasenna:this.contrasenna}
          )
        .then(res => {
          console.log(res.status)
          console.log(res.data.status)
          
          if(res.status==200){
          localStorage.setItem("usertoken", res.data)
          console.log(localStorage)
          this.correo = ""
          this.contrasenna = ""
          this.$router.push("/Home")
          this.emitMethod();
          }else{
            this.correo = ""
            this.contrasenna = ""
            swal(res.message)
          }
        })
        .catch(err => {
          this.correo = ""
          this.contrasenna = ""
          swal(''+err.response.data.message)
          console.log(err.response);
        });
      
    },
    emitMethod() {
      EventBus.$emit("logged-in", "loggedin");
    }
  },
  mounted() {}
};
</script>