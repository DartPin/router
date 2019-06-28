<template>
  <div id="app">
    <div class="desctop">
          <div class="back"></div>
          <Nav></Nav>
          <router-view></router-view>
          <Footer></Footer>
        </div>
    
  </div>
</template>

<script>
import Nav from "./components/desctop/nav/Nav.vue"

export default {
  name: 'app',
  components: {
    Nav
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap");

html,
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
  width: 100%;
}
#app {
  margin: 0;
  font-family: "Luckiest Guy", cursive;
  position: absolute;
  width: 100%;
  max-width: 2500px;
  height: 100%;
}
.back {
  background-image: url("./assets/main/back.jpg");
  background-attachment: fixed;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.mobile {
  display: none;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
.desctop {
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
.page-menu {
  position: relative;
  left: 50%;
  margin: 10px 0 70px -50px;
}
.btn-page {
  margin: 0 5px 0 5px;
}

@media (max-width: 729px) {
  .desctop {
    display: none;
  }
  .mobile {
    display: inherit;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
