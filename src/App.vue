<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp";
import Footer from './components/Footer'

export default {
  name: "App",
  components: {
    HeaderComp,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Oswald");
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f7797d;
  margin-top: 60px;
}
</style>
