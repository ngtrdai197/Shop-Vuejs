<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-10 mx-auto mt-5">
          <form @submit.prevent="addProduct">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Product Name"
                v-model="productName"
              >
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Url Photo" v-model="urlPhoto">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Price" v-model="price">
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Description"
                v-model="description"
              >
            </div>
            <div class="form-group">
              <select class="form-control form-control-sm">
                <option>Small select</option>
              </select>
            </div>
            <button class="btn btn-block btn-primary">Thêm</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "M_Product",
  data() {
    return {
      category: "",
      productName: "",
      description: "",
      price: "",
      urlPhoto: ""
    };
  },
  methods: {
    addProduct() {
      console.log(this.productName);
    }
  }
};
</script>
