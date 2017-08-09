<template>
  <div>
    <p class="bodyp">asfasdasdas
    <span>{{fff}}</span>
    </p>

  </div>
</template>

<script>
  export default{
      name : "bodys",
      data(){
          return {}
      },
      props :['fff']
  }

</script>
<style>
  .bodyp{
    width: 200px;
    height: 200px;
    background-color: #ff130e;
  }
</style>
