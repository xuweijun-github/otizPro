<template>
  <div>会员等级 ID={{id}}</div>
</template>

<script>
  export default {
    props: ['id'],
    name: 'MemberLevel',
    beforeRouteEnter: (to, from, next) => {
      console.log("进入会员等级页面");
      next(vm => {
        vm.getData();
      });
    },
    beforeRouteLeave: (to, from, next) => {
      console.log("离开会员等级页面");
      next();
    },
    methods: {
      getData: function() {
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/data.json',
        }).then(function() {

        }).catch(function(error) {
          console.log(error);
        })
      }
    }
  }
</script>

<style>
</style>
