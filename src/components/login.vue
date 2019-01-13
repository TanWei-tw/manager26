<template>
  <!-- 登录容器 -->
  <div class="login-container">
    <!-- 表单容器 -->
    <div class="form-container">
      <h2>用户登录</h2>
      <!-- ref vue提供的属性 让我们可以给dom元素起名字 -->
      <el-form
        label-position="top"
        label-width="80px"
        ref="formData"
        :rules="rules"
        :model="formData"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <!-- login-btn 自定义类名 避免跟默认冲突 -->
        <el-button class="login-btn" @click="submitForm('formData')" type="primary">用户登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      formData: {
        userName: "",
        passWord: ""
      },
      rules: {
        userName: [
          { required: true, message: "账号长度过低", trigger: "change" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10个字符",
            trigger: "change"
          }
        ],
        passWord: [
          {
            required: true,
            message: "密码长度不够,安全系数过低",
            trigger: "change"
          },
          {
            min: 6,
            max: 10,
            message: "长度在 3 到 10个字符",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
     this.$refs[formName].validate(valid => {
        if (valid) {
          // 成功
          // axios 调用接口
          this.$axios.post("login", this.formData).then(res => {
            console.log(res);
            if (res.data.meta.status === 400) {
              // 错误
              this.$message.error(res.data.meta.msg);
            } else if (res.data.meta.status == 200) {
              // 正确
              this.$message({
                message: res.data.meta.msg,
                type: "success"
              });
              window.sessionStorage.setItem('token',res.data.data.token);
              this.$router.push('/');
            }
          });
        } else {
          // 失败
          // 弹框提示
          this.$message.error("请正确输入用户名和密码 ^_^");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login-container {
  width: 100%;
  height: 100%;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-container {
    width: 580px;
    padding: 40px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 10px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>

