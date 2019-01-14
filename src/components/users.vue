<template>
  <div class="containner">
    <!-- 列表分类 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <myBreadcrumb :level2="level2" :level3="level3" class="containner-list"></myBreadcrumb>
        </div>
      </el-col>
    </el-row>
    <!-- 搜索功能 -->
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple-dark">
          <el-input placeholder="请输入内容" v-model="tablePage.query">
            <el-button slot="append" class="search-btn" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-col>
      <el-col :span="18" class="add">
        <el-button type="success" plain>添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 用户状态 -->
    <el-table :data="usersList" border style="width: 100%">
      <el-table-column label="#" width="40" type="index"></el-table-column>
      <el-table-column prop="username" label="姓名" width="100"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="300"></el-table-column>
      <el-table-column prop="create_time" label="电话" width="300"></el-table-column>
      <el-table-column prop="mg_state" label="用户状态" width="100">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.date" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" plain></el-button>
          <el-button type="success" icon="el-icon-check" size="mini" plain></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" plain></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 底部分页 -->
     <el-row>
    <el-col :span="24">
      <el-pagination
      :current-page="tablePage.pagenum"
       :page-sizes="[ 5, 8,10]"
      :page-size="tablePage.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </el-col>
     </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
        level2: "用户管理",
      level3: "用户列表",
      formData: {
        username: "",
        email: "",
        create_time: ""
      },
      tablePage: {
        query: "",
        pagenum: 1,
        pagesize: 10
      },
      usersList: [],
      mg_state:'',
      total:0
    };
  },
  created() {
    this.$axios
      .get("users", {
        params: this.tablePage
      })
      .then(res => {
        console.log(res);
        this.usersList = res.data.data.users;
        this.mg_state=res.data.data.users.mg_state
        this.total=res.data.data.total
      });
  }
};
</script>
<style lang="scss">
.containner {
  line-height: normal;
  .containner-list {
    line-height: 60px;
    padding-left: 10px;
    font-weight: 900;
    font-size: 20px;
  }

  .add {
    text-align: left;
    background-color: hotpink;
  }
}
</style>