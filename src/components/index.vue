<template>
    <div>
      main
        <el-button @click="quit" type="danger">退出</el-button>
    </div>
</template>
<script>
export default {
    beforeCreate() {
    let token=window.sessionStorage.getItem('token');
    if(token){
       this.$router.push('/')
    }else{
           this.$message({
          message: '要先登陆哦',
          type: 'warning'
        });
         this.$router.push('login')
    }
    },
    methods: {
        quit(){
            window.sessionStorage.removeItem('token');
            this.$router.push('login')
        }
    },
}
</script>
<style >
    
</style>