<template>
  <div class="main-container">
    <el-container class="my-container">
      <el-header>
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <img src="../assets/logo.png" alt>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-light">电商管理平台</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <el-button @click="quit" type="danger">退出</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="2" class="el-menu-vertical-demo" router>
            <el-submenu :index="item.order+'' " v-for="(item, index) in mainList" :key="item.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.authName}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item :index="'/'+it.path" v-for="(it, i) in item.children" :key="it.id">
                  <i class="el-icon-menu"></i>
                  {{it.authName}}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  // beforeCreate() {
  // let token=window.sessionStorage.getItem('token');
  // if(token){

  // }else{
  //        this.$message({
  //       message: '要先登陆哦',
  //       type: 'warning'
  //     });
  //      this.$router.push('login')
  // }
  // },

  data() {
    return {
      mainList: []
    };
  },
  created() {
    this.$axios.get("menus").then(
      res => {
        // console.log(res);
        this.mainList = res.data.data;
      },
      err => {}
    );
  },
  methods: {
    quit() {
      this.$confirm("是否退出", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          window.sessionStorage.removeItem("token");
          this.$router.push("login");
          this.$message({
            type: "success",
            message: "退出成功!"
          });
        })
        .catch(() => {
          //   this.$message({
          //     type: "info",
          //     message: ""
          //   });
        });
    }
  }
};
</script>

<style lang="scss">
.main-container {
  height: 100%;
  .my-container {
    height: 100%;
    .el-header,
    .el-footer {
      background-color: #b3c0d1;
      color: #333;
      text-align: center;
      line-height: 60px;
      .el-col-4 {
        text-align: left;
      }
      .el-col-2 {
        text-align: right;
      }
      .el-col-18 {
        font-size: 24px;
        font-weight: 900;
        color: #fff;
      }
    }

    .el-aside {
      background-color: #d3dce6;
      color: #333;
      text-align: center;
      line-height: 200px;
    }

    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
    .el-submenu__title {
      text-align: left;
    }
  }
}
</style>