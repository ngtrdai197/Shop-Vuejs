<template>
  <div class="container">
    <div class="row">
      <div class="col-8 mx-auto">
        <form @submit.prevent="onRegister">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputFirstName">First name</label>
              <input
                type="text"
                class="form-control"
                v-model="firstname"
                id="inputFirstName"
                placeholder="First name"
              >
            </div>
            <div class="form-group col-md-6">
              <label for="inputLastname">Last name</label>
              <input
                type="text"
                class="form-control"
                v-model="lastname"
                id="inputLastname"
                placeholder="Last name"
              >
            </div>
          </div>
          <div class="form-group">
            <label for="inputUsername">Username</label>
            <input
              type="text"
              class="form-control"
              v-model="username"
              id="inputUsername"
              placeholder="Username"
            >
          </div>
          <div class="form-group">
            <label for="inputPassword">Password</label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              id="inputPassword"
              placeholder="Password"
            >
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              v-model="address"
              id="inputAddress"
              placeholder="1234 Main St"
            >
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" v-model="isCheck" type="checkbox" id="gridCheck">
              <label class="form-check-label" for="gridCheck">Agree with our terms</label>
            </div>
          </div>
          <button type="submit" class="btn btn-block btn-success">
            <span class="lds-dual-ring" v-if="isLoading"></span>
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import API from "../../@core/api";

export default {
  name: "Register",
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      address: "",
      isCheck: false,
      isLoading: false
    };
  },
  methods: {
    onRegister() {
      const user = {
        fullname: this.firstname + " " + this.lastname,
        username: this.username,
        password: this.password,
        address: this.address
      };
      if (this.isCheck) {
        this.isLoading = true;
        Axios.post(`${API.HOST}/${API.USER.REGISTER}`, user)
          .then(response => {
            if (response) {
              this.isLoading = false;
              this.$toasted.success("Register successfully", {
                theme: "toasted-primary",
                position: "top-right",
                duration: 1000
              });
              this.$router.push("/auth/login");
            }
          })
          .catch(err => {
            this.isLoading = false;
            throw err;
          });
      } else {
        this.$toasted.error("Please agree with our terms", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 1000
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  .row {
    height: 100%;
    .col-8 {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      form {
        padding: 20px;
        background-image: linear-gradient(to right, #43c1a2de, #0df682ed);
        color: #000;
        font-size: 19px;
        font-weight: 600;
        flex: 1;
        .form-check-input {
          height: 20px;
          width: 20px;
        }
        .form-check-label {
          margin-left: 15px;
        }
        .lds-dual-ring {
          display: flex;
          width: 64px;
          height: 64px;
          align-items: center;
        }
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 22px;
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
    }
  }
}
</style>

