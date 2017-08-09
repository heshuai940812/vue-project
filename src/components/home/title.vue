<template>
  <div class="title" v-on:click="gain">
    <p>{{fff}}</p>
  </div>
</template>

<script>
  export default{
      name : "title",
      data (){
          return {}
      },
      props : ['fff'],
      methods : {
          gain : function () {
            alert(this.$route.query.deviceId)
          }
      }
  }
</script>
<style>
  .title{
    width: 100px;
    height: 100px;
    min-width: 100px;
    background-color: #5fff85;
  }
</style>
