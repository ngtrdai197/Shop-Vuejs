<template>
  <!-- Page Content -->
  <div class="container homepage">
    <div class="row row-content">
      <div class="col-11 mx-auto">
        <!-- carousel -->
        <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img
                class="d-block"
                style="width: 100%"
                src="https://ionic-shop-api.herokuapp.com/images/carousel-dong-phuc-ao-phong-900x350.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block"
                style="width: 100%"
                src="https://ionic-shop-api.herokuapp.com/images/carousel-dong-phuc-bep-02-900x350.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block"
                style="width: 100%"
                src="https://ionic-shop-api.herokuapp.com/images/carousel-dong-phuc-cong-so-07-900x350.jpg"
                alt="Third slide"
              />
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
        <div class="row home-products">
          <!-- loop item-product -->
          <Product v-for="product in products" :key="product._id" :data="product"></Product>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.col-lg-9 -->
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</template>
<script>
import Product from "./Product/Product.vue";
import { mapGetters } from "vuex";
export default {
  name: "Homepage",
  components: { Product },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("ProductModule/FETCH_PRODUCTS");
  },
  computed: {
    ...mapGetters("ProductModule", { products: "FIND_ALL_PRODUCT" }),
    ...mapGetters("AuthModule", { isLogin: "GET_IS_LOGIN" })
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "public/scss/homepage.scss";
</style>

