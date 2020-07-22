<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-ligth px-md-4 fixed-top">
      <router-link to="/Home" class="navbar-brand mb-0 h1">
        <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt />
        Valencia.app
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/Home" class="nav-link">Home</router-link>
          </li>
          <li v-if="auth=='loggedin'" class="nav-item">
            <router-link to="/Usuarios" class="nav-link">Usuarios</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Productos" class="nav-link">Productos</router-link>
          </li>
          <li v-if="auth=='loggedin'" class="nav-item">
            <router-link to="/" class="nav-link">Perfil</router-link>
          </li>
        </ul>
        <ul class="nav justify-content-end">
          <li v-if="auth==''" class="nav-item active border border-light rounded" style="margin-right: 5px;">
            <router-link
              class="btn btn-dark"
              to="/Singin"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Tooltip on bottom"
            >
              Sing in
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li v-if="auth==''" class="nav-item active border border-light rounded">
            <router-link class="btn btn-dark" to="/SingUp">
              Sing up
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li v-if="auth=='loggedin'" class="nav-item">
            <a href="/" class="btn btn-secondary btn-lg active" v-on:click="logout()">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import EventBus from "./EventBus";

EventBus.$on("logged-in", test => {
  console.log(test);
});

export default {
  name: "HeaderComp",
  data() {
    return {
      auth: "",
      usuario: ""
    };
  },

  methods: {
    logout() {
      localStorage.removeItem("usertoken");
    }
  },
  mounted() {
    EventBus.$on("logged-in", status => {
      this.auth = status;
    });
  }
};
</script>

<style>
nav {
  box-shadow: 0px 9px 7px 0px rgba(0, 0, 0, 0.15);
  background-color: whitesmoke;
}
.nav-item {
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  transition: 500ms;
}
.nav-item:hover {
  border-bottom: 2px solid #cecaca;
}
</style>