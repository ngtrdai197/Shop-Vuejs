<template>
  <div id="app">
    <Header></Header>
    <div class="cover-transition">
      <transition enter-active-class="animated slideOutLeft" leave-active-class="animated slideOutRight">
        <router-view></router-view>
      </transition>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Share/Header.vue";
import Footer from "./components/Share/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
  }
};
</script>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css);
@import url(https://use.fontawesome.com/releases/v5.7.1/css/all.css);
.cover-transition {
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.cover-transition {
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
