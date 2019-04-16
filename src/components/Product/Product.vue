<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 product-component">
    <div class="card h-100">
      <div class="cover-image">
        <router-link :to="{path: '/product/'+ to_slug(data.ProductName)+'/'+data._id+'.html'}">
          <img class="card-img-top" :src="data.UrlPhoto" alt>
        </router-link>
        <div class="cover-button">
          <span title="Chi tiết sản phẩm">
            <router-link :to="{path: '/product/'+ to_slug(data.ProductName)+'/'+data._id+'.html'}">
              <i class="fas fa-eye"></i>
            </router-link>
          </span>
          <span @click="add_cart()" title="Thêm vào giỏ đồ">
            <i class="fas fa-cart-plus"></i>
          </span>
          <span title="Sản phẩm yêu thích">
            <i class="fas fa-heart"></i>
          </span>
        </div>
      </div>
      <div class="card-body">
        <h4 class="card-title">
          <router-link
            :to="{path: '/product/'
            +to_slug(data.ProductName)
            +'/'+data._id+'.html'}"
          >{{data.ProductName}}</router-link>
        </h4>
        <h5>{{data.Price}} $</h5>
        <p class="card-text" :title="data.Description">{{data.Description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["data"],
  computed: {},
  methods: {
    add_cart() {
      let order = {
        _id: this.data._id,
        ProductName: this.data.ProductName,
        UrlPhoto: this.data.UrlPhoto,
        Price: this.data.Price,
        Description: this.data.Description,
        Quantity: 1
      };
      this.$store.dispatch("CartModule/ADD_CART", order);
      this.$toasted.success("Add to cart succesfully", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 1000,
        });
      // confirm('Bạn muốn thêm sản phẩm vào giỏ hàng ?');  
    },
    to_slug(str) {
      str = str.toLowerCase();
      str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
      str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
      str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
      str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
      str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
      str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
      str = str.replace(/(đ)/g, "d");
      str = str.replace(/([^0-9a-z-\s])/g, "");
      str = str.replace(/(\s+)/g, "-");
      str = str.replace(/^-+/g, "");
      str = str.replace(/-+$/g, "");
      return str;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "public/scss/product.scss";
</style>
