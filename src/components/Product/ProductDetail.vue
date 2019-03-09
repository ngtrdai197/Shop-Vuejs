<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-sm-12">
        <div class="card text-left" v-if="product">
          <div class="cover-image">
            <img class="card-img-top" :src="product.UrlPhoto" alt>
            <div class="cover-button">
              <span>
                <i class="fas fa-cart-plus"></i>
              </span>
              <span>
                <i class="fas fa-heart"></i>
              </span>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title text-center">{{product.ProductName}}</h4>
            <p class="card-text text-center">{{product.Price}} $</p>
            <p class="card-text">{{product.Description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "ProductDetail",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
    }
  },
  created() {
    this.$store.dispatch("ProductModule/FIND_PRODUCT", this.id);
  },
  computed: {
    ...mapState("ProductModule", ["product"])
  }
};
</script>
<style scoped>
.card img {
  height: 400px;
  width: 100%;
}
.cover-image {
  position: relative;
  cursor: pointer;
}
.cover-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
  display: flex;
  justify-content: center;
  background: #d3d3d3d9;
  opacity: 0;
  transition: all 0.4s ease-in-out;
}
.cover-image:hover .cover-button {
  transition: all 0.5s ease-in-out;
  opacity: 1;
}
.cover-button span i {
  font-size: 24px;
  cursor: pointer;
  padding: 7px 30px;
}
.cover-button span i:hover {
  color: #ffffff;
}
</style>

