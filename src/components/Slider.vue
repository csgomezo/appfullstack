<template>
  <div>
    <!--Contenedor-->
    <!--<div id="carouselExampleSlidesOnly" class="jumbotron p-4 p-md-5 text-white rounded bg-dark">-->
    <div id="banner" class="banner">
      <div>
        <!--<img :src="direccion" :alt="alt" />-->
        <span class="banner-title">{{ texto }}</span>
      </div>
    </div>
  </div>
  <!--Contenedor-->
</template>

<script>
export default {
  name: "Slider",
  props: ["texto", "direccion", "alt"],
};
</script> 

<style>
.banner {
  background-color: rgb(153, 153, 153);
  background-repeat: no-repeat;
  text-align: center;
  background-size: cover;
  position: relative;
  height: 300px;
  background-position: center;
  background: #c6ffdd;
  background: -webkit-linear-gradient(to right, #f7797d, #fbd786, #c6ffdd);
  background: linear-gradient(to right, #f7797d, #fbd786, #c6ffdd);

  border-bottom: 4px solid rgb(185, 185, 185);
  margin-bottom: 20px;
}
.banner-title {
  color: #fff;
  font-size: 50px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Great Vibes", cursive;
}
</style>
