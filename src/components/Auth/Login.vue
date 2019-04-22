<template>
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
          <button type="submit" class="btn btn-primary btn-block">
            <span class="lds-dual-ring" v-if="isLoading"></span>
            Login
          </button>
        </form>
        <div class="login-register">
          You don't have account ?
          <span>
            <router-link to="/auth/register">Register now</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import API from "../../@core/api";
import Axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      isLogin: true,
      isLoading: false
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
      this.isLoading = true;
      Axios.post(`${API.HOST}/${API.USER.LOGIN}`, _user)
        .then(response => {
          this.$store.dispatch("AuthModule/SET_IS_LOGIN");
          this.$store.dispatch("AuthModule/LOGIN", response.data);
          this.isLoading = false;

          this.$router.push("/");
          this.$toasted.success("Sign in successfully", {
            theme: "toasted-primary",
            position: "top-right",
            duration: 1000
          });
        })
        .catch(err => {
          this.isLoading = false;
          this.isLogin = false;
          this.$toasted.error("Sign in failure", {
            theme: "toasted-primary",
            position: "top-right",
            duration: 1000
          });
          throw err;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 487px;
  .card {
    width: 400px;
    position: absolute;
    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);
    form {
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        span{
          padding-right: 10px;
        }
        .lds-dual-ring:after {
          content: " ";
          display: block;
          width: 46px;
          height: 46px;
          margin: 1px;
          border-radius: 50%;
          border: 5px solid #fff;
          border-color: #fff transparent #fff transparent;
          animation: lds-dual-ring 1.2s linear infinite;
        }
        @keyframes lds-dual-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
    .login-register {
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      span {
        color: blue;
        font-style: italic;
        padding-left: 7px;
      }
    }
  }
}
</style>


