<template>
  <div id="app">
    <appHeader/>
    <div class="content">
      <img width="10%" src="./assets/logo.png">
      <h4 class="app-title">Encuentra la mejor musica para tus oídos.</h4>
      <router-view></router-view>
    </div>
    <appFooter/>
  </div>
</template>

<script >
import appHeader from "./components/layout/appHeader";
import appFooter from "./components/layout/appFooter";

export default {
  name: "App",
  components: {
    appHeader,
    appFooter
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #121212;
}

/*
#app:after {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  z-index: -1;
  width: 200%;
  height: 200%;
  background: url("https://images.pexels.com/photos/417458/pexels-photo-417458.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  background-size: contain;
  background-position: 600px -200px;

  filter: blur(20px);
} 
*/
.content {
  padding-top: 150px;
  min-height: 700px;
  .app-title {
    margin-top: 20px;
  }
}
</style>
