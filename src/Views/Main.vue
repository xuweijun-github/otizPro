<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>会员管理</template>
          <el-menu-item-group>
            <!--<template slot="title">会员管理</template>-->
            <el-menu-item index="1-1" class="el_menu-item">
              <router-link :to="{name:'MemberLevel',params:{id:3}}">会员等级</router-link>
            </el-menu-item>
            <el-menu-item index="1-2" class="el_menu-item">
              <router-link to='/member/list'>会员列表</router-link>
            </el-menu-item>
            <el-menu-item index="1-3" class="el_menu-item">
              <router-link to='/goMain/admin123'>回到首页</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>商品管理</template>
          <el-menu-item-group>
            <!--<template slot="title">商品管理</template>-->
            <el-menu-item index="2-1" class="el_menu-item">商品分类</el-menu-item>
            <el-menu-item index="2-2" class="el_menu-item">商品列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>


    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>用户中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{$route.params.name}}</span>
      </el-header>
      <el-main>
       <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'Main'
  }
</script>

<style scoped>
   .el-header {
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
    }

    .el-aside {
      color: #333;
    }
    .el_menu-item{
      margin-left: 30px;
    }
</style>
