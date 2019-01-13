<template>
  <div class="login-container">
    <div class="form-container">
      <h2>账号登陆</h2>
      <el-form
        label-position="top"
        :rules="rules"
        ref="formData"
        label-width="80px"
        :model="formData"
      >
        <el-form-item label="账号" prop="userName">
          <el-input v-model="formData.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input v-model="formData.passWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="submitForm('formData')">登陆</el-button>
        </el-form-item>
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
    submitForm(formData) {
      this.$refs[formData].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
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
