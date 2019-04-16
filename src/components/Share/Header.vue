<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top header">
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
          <li class="nav-item" v-if="!isLogin">
            <router-link to="/auth/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" style="position: relative">
            <router-link to="/cart" class="nav-link" title="Thêm vào giỏ đồ">
              <i class="fas fa-cart-plus"></i>
              <span class="count">{{quantity}}</span>
            </router-link>
          </li>
          <li class="nav-item nav-image" v-if="isLogin" @click="toggleInformation()">
            <div class="nav-link">
              <img src="http://nguyendai.me/images/avatar.jpg" alt srcset>
            </div>
            <div class="information" v-if="isInformation">
              <div class="user-name">
                Hello:
                <strong>{{user.fullname}}</strong>
              </div>
              <div class="address">Địa chỉ: <strong>{{user.address}}</strong></div>
              <div class="logout" @click="signOut()">Sign Out</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      isInformation: false
    };
  },
  computed: {
    ...mapState("CartModule", ["quantity"]),
    ...mapGetters("AuthModule", { isLogin: "GET_IS_LOGIN" }),
    ...mapGetters("AuthModule", { user: "GET_USER_LOGIN" })
  },
  methods: {
    toggleInformation() {
      this.isInformation = !this.isInformation;
    },
    signOut() {
      this.isInformation = !this.isInformation;
      this.$store.dispatch("AuthModule/SET_IS_LOGIN");
      this.$router.push({ name: "home" });
      this.$toasted.success("Sign out successfully", {
        theme: "toasted-primary",
        position: "top-right",
        duration: 1000
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "public/scss/header.scss";
</style>


