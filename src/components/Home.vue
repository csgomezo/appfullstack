<template>
  <div>
    <Slider
      texto="Bienvenido a Mushapalatto"
      alt="logo"
      direccion="../assets/img/mushapalatto.jpg"
    ></Slider>
    <div class="container-fluid">
      <div class="row">
        <!--<img
          src="../assets/img/banner-home.jpg"
          alt="banner-home"
          class="banner-img"
        />-->
      </div>
      <div class="row">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="../assets/img/banner-home/banner-home-1.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../assets/img/banner-home/banner-home-2.jpg" alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../assets/img/banner-home/banner-home-3.jpg" alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../assets/img/banner-home/banner-home-4.jpg" alt="Forth slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="row new-section">
        <div class="col"></div>
        <div class="col-5">
          <h1>La mejor opcion en tiempos de cuarentena</h1>
        </div>
        <div class="col"></div>
      </div>
      <div class="row new-section">
        <div class="col"></div>
        <div class="col-5" style="heigth:400px; margin-right: 20px;">
          <div class="row text-center text-row">
            <h3>Variedad infinitas en productos y marcas</h3>
          </div>
          <div class="row text-center text-row">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              tenetur porro placeat id ullam voluptatibus, corporis ea! Facilis,
              corrupti est. Blanditiis veritatis, voluptate odit nobis dolore ut
              facere facilis cum!
            </p>
          </div>
        </div>
        <div class="col-5 full-col">
          <div class="img-product"></div>
        </div>
      </div>

    </div>
    
  </div>
</template>

<script>
import Slider from "./Slider";

export default {
  name: "Home",
  components: {
    Slider,
  },
};
</script>

<style>
.container-fluid {
  margin-top: -21px;
}
.banner-img {
  width: 100%;
  height: auto;
}
h1 {
  font-size: 2.1rem;
  margin-top: 40px;
  padding: 9px 1px;
  border-bottom: 2px solid #fbd786;
}
.new-section {
  margin-top: 60px;
}
.text-row {
  display: block;
}
.full-col {
  padding: 0px;
}
.img-product {
  margin-right: 20px;
  border-radius: 30px;
  box-shadow: 0px 9px 7px 0px rgba(0, 0, 0, 0.15);
  height: 400px;
  background-size: cover;
  background-position: center;
  background-image: url(../assets/img/producto-1.jpg);

  animation: product-animation;
  animation-direction: normal;
  animation-timing-function: cubic-bezier();
  animation-duration: 20s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-play-state: running;
}

@keyframes product-animation {
  0% {
    background-image: url(../assets/img/producto-1.jpg);
  }
  8% {
    background-image: url(../assets/img/producto-1.jpg);
  }
  20% {
    background-image: url(../assets/img/producto-2.jpg);
  }
  28% {
    background-image: url(../assets/img/producto-2.jpg);
  }
  40% {
    background-image: url(../assets/img/producto-3.jpg);
  }
  48% {
    background-image: url(../assets/img/producto-3.jpg);
  }
  60% {
    background-image: url(../assets/img/producto-4.jpg);
  }
  68% {
    background-image: url(../assets/img/producto-4.jpg);
  }
  80% {
    background-image: url(../assets/img/producto-5.jpg);
  }
  88% {
    background-image: url(../assets/img/producto-5.jpg);
  }
  100% {
    background-image: url(../assets/img/producto-1.jpg);
  }
}
.card-product {
  color: white;
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f7797d, #fbd786);
  background: linear-gradient(to right, #f7797d, #fbd786);
  box-shadow: 0px 9px 7px 0px rgba(0, 0, 0, 0.15);
  padding: 30px 20px;
  margin: 0px 30px;
  border-radius: 20px;
  transition: 400ms;
}
.card-product:hover {
  box-shadow: 0px 9px 7px 0px rgba(0, 0, 0, 0.5);
  padding: 20px 10px;
  margin: 0px 40px;
}
.card-icon {
  margin-top: 20px;
}
.card-product .svg-inline--fa.fa-w-16,
.card-product .svg-inline--fa.fa-w-18 {
  max-width: 80%;
  width: 80%;
  height: auto;
}
</style>
