<template>
  <div>
    <div class="container">
      <div
        class="alert alert-danger"
        v-if="isCart==false"
      >Giỏ hàng trống. Thêm sản phẩm vào giỏ hàng !!!</div>
      <button
        type="button"
        class="btn btn-primary float-right mb-3"
        @click="clearCarts()"
        v-if="isCart==true"
      >Clear carts</button>
      <div class="row">
        <div class="col-md-3" v-for="cart in carts" :key="cart._id">
          <div class="card mb-3" style="background-color:dark; border-color:dark;">
            <img class="card-img-top" :src="cart.UrlPhoto" alt>
            <div class="card-body">
              <h4 class="card-title">{{cart.ProductName}}</h4>
              <p class="card-text">{{cart.Description}}</p>
            </div>
            <div class="count">{{cart.Quantity}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      isCart: true
    };
  },
  computed: {
    ...mapGetters("CartModule", { carts: "GET_ALL_CART" })
  },
  created() {
    this.isCart = localStorage.getItem("count") ? true : false;
  },
  updated() {
    this.isCart = localStorage.getItem("count") ? true : false;
  },
  methods: {
    clearCarts() {
      this.$store.dispatch("CartModule/CLEAR_CART");
      this.isCart = false;
    }
  }
};
</script>
<style scoped>
img.card-img-top {
  height: 200px;
}
p.card-text {
  font-size: 15px;
}
.count {
  position: absolute;
  top: 7px;
  right: 10px;
  width: 25px;
  height: 25px;
  border: 1px solid;
  text-align: center;
  border-radius: 50%;
}
</style>


