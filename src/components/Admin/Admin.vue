<template>
  <div class="admin-layout">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <h3 class="text-center">Shop 3s</h3>
          <div class="infor-admin">
            <img src="http://nguyendai.me/images/avatar.jpg" alt srcset>
            <div
              class="username"
              data-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >Nguyễn Đại</div>
            <div
              class="collapse multi-collapse"
              id="multiCollapseExample1"
            >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div>
          </div>
          <ul>
            <li>Components</li>
            <li>Form</li>
            <li>Table</li>
            <li
              class="data"
              data-toggle="collapse"
              href="#showDataBase"
              role="button"
              aria-expanded="false"
              aria-controls="showDataBase"
            >
              Data
              <div class="collapse multi-collapse" id="showDataBase">
                <ul>
                  <li>
                    <router-link to="/auth/admin/user/user-manager" title="Quản lý User">User</router-link>
                  </li>
                  <li>
                    <router-link
                      to="/auth/admin/product/product-manager"
                      title="Thêm sản phẩm"
                    >Product</router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li>Charts</li>
          </ul>
        </div>
        <div class="col-md-9">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Admin"
};
</script>


<style lang="scss" scoped>
.admin-layout {
  height: 100%;
  .container-fluid {
    height: 100%;
    .row {
      height: 100%;
      .col-md-3 {
        height: 100%;
        background: #333;
        h3 {
          font-size: 33px;
          color: #ffffff;
          padding: 14px 0;
        }
        .infor-admin {
          display: flex;
          color: #ffffff;
          img {
            height: 35px;
            width: 35px;
            border-radius: 50%;
          }
        }
        ul {
          li {
            list-style: none;
            padding: 15px 0;
            color: #ffffff;
            font-weight: bold;
            font-size: 17px;
            #showDataBase {
              ul {
                padding: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
