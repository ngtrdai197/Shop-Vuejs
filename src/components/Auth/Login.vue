<template>
  <div>
    <div class="container">
      <div class="card text-left">
        <div class="card-body">
        <div class="alert alert-danger" v-if="!isLogin">Information enter incorrect</div>
          <form action="#" method="post" @submit.prevent="onLogin">
            <div class="form-group">
              <label for>Username</label>
              <input type="text" class="form-control" aria-describedby="helpId" v-model="username">
            </div>
            <div class="form-group">
              <label for>Password</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      isLogin: true
    };
  },
  methods: {
    onLogin() {
      if(this.username === 'ngtrdai197'&&this.password ==='123'){
          this.isLogin = true;
          setTimeout(() => {
          this.$router.push('/');
          }, 1000);
      }else{
          this.isLogin = false;
      }
    }
  }
};
</script>

<style scoped>
.card {
  width: 400px;
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container {
  height: 487px;
}
</style>


