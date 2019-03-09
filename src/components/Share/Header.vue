<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">Shop 3s</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Shop</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/service" class="nav-link">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/auth/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link" title="Thêm vào giỏ đồ">
              <i class="fas fa-cart-plus"></i>
              <span class="count">{{quantity}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState("CartModule", ["quantity"])
  }
};
</script>
<style scoped>
span.count {
    padding-left: 5px;
    font-size: 15px;
    position: absolute;
    top: 9px;
}
</style>


