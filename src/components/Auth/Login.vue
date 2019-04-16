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
import { mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      isLogin: true
    };
  },
  computed: {
    ...mapGetters("AuthModule", { user: "GET_USER_LOGIN" })
  },
  methods: {
    onLogin() {
      const _user = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch("AuthModule/LOGIN", _user);
      if (this.user) {
        this.$store.dispatch("AuthModule/SET_IS_LOGIN");
        this.$router.push("/");
        this.$toasted.success("Sign in successfully", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 1000
        });
      } else {
        this.isLogin = false;
        this.$toasted.error("Sign in failure", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 1000
        });
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


