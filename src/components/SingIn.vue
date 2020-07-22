<template>
  <div class="container">
    <img src="../assets/img/mushapalatto.jpg" width="200px" />

    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="login()" class="form-signin">
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
import Usuario from "./Models/Usuario";
import EventBus from './EventBus.vue';


export default {
  name: "SingIn",

  methods:{
      login(){
          axios.post(this.url+'login',{
              correo:this.correo,
              contrasenna:this.contrasenna,
          }).then(res=>{
              if(res){
                  
                  localStorage.setItem('usertoken',res.data)
                  console.log(localStorage)
                  this.correo =''
                  this.contrasenna=''
                  this.$router.push('/Home');
              }
          }).catch(err=>{
              console.log(err);
          })
          this.emitMethod()
      },
    emitMethod(){
        EventBus.$emit('logged-in','loggedin')
    }
  },
  mounted() {},

  data() {
    return {
      url: Global.url,
      correo:'',
      contrasenna:'',
      usuario: new Usuario("", "", "", "")
    };
  }
};
</script>