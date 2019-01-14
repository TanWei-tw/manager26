<template>
   <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>{{level2}}</el-breadcrumb-item>
  <el-breadcrumb-item>{{level3}}</el-breadcrumb-item>
 
</el-breadcrumb>
</template>
<script>
export default {
     props: ['level2','level3'],
}
</script>
<style >
    
</style>