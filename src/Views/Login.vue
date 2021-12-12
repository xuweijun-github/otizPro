<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" class="login-box">
      <h3 class="login-title">欢迎登陆</h3>
      <el-form-item label="账号" prop="name">
        <el-input type="text" placeholder="请输入账号" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" placeholder="qing shu ru mima" v-model="form.password"></el-input>

      </el-form-item>
      <el-checkbox v-model="checked" @click="rememberMe">记住我</el-checkbox>
      <el-form-item style="margin-top: 15px;">
        <el-button type="primary" @click="submitForm('form')">登陆</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        checked: true,
        form: {
          name: '',
          password: '',
        },
        rules: {
          name: [{
            required: true,
            message: '请输入用户名称',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      rememberMe(){

      },
      submitForm(formName) {
       debugger;
        this.$refs[formName].validate((valid) => {
         //如果输入有效
          if (valid) {
             //debugger;
            this.postRequest('/login',this.form).then(resp=>{
              if(resp){
                const tokenStr = resp.obj.tokenHead+resp.obj.token
                this.$router.replace('/home')
              }
            })
            this.$message({
              message:'恭喜你，登陆成功!',
              type:'success'
            })
            sessionStorage.setItem('tokenStr','1234567890')
            sessionStorage.setItem('isLogin', 'true');
            this.$router.replace('/home')

            // this.$router.push({
            //   name: 'Main',
            //   params: {
            //     name: this.form.name
            //   }
          } else {
            this.$message({
              message: '请输入用户名和密码',
              type: 'warning'
            });
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .login-box {
    width: 350px;
    margin: 120px auto;
    border: 1px solid #DCDFE6;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 30px #DCDFE6;
  }

  .login-title {
    text-align: center;
  }
</style>
