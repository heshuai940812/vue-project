<template>
  <div class="home">
    <LeftNav>
    </LeftNav>
    <Bodys :fff="bodyss"></Bodys>
    <div>
      {{bodyss}}
    </div>
    <headTop :fff="msg"></headTop>
    <vtitle :fff="titles"></vtitle>
  </div>


</template>

<script>
  import headTop from '../components/home/head.vue'
  import LeftNav from '../components/home/left.vue'
  import Bodys from '../components/home/body.vue'
  import vtitle from '../components/home/title.vue'
  export default{
      name : "home",
      data (){
        return {
            msg:"我是left",
            bodyss:"我是bodys",
            titles : "我是title"
        }
      },
      components:{
        headTop,
        LeftNav,
        Bodys,
        vtitle
      }

  }

</script>
<style>

</style>
