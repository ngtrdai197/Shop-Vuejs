<template>
  <div>
    <Header></Header>
    <div class="cover-transition">
      <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeInUp">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
      <Footer></Footer>
    </div>
</template>
<script>
import Header from "./Share/Header.vue";
import Footer from "./Share/Footer.vue";
export default {
  name: "Layout",
  components: {
    Header,
    Footer
  }

};
</script>
<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css);

.cover-transition {
  overflow: hidden;
}
.cover-transition {
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>


