<script>
  import HeaderApp from './components/HeaderApp.vue'

  export default {
    name: 'App',
    data(){
      return{

      }
    },
    components: {
      HeaderApp
    }
  }
</script>

<template>
  <HeaderApp/>

  <router-view></router-view>

</template>

<style>
  @import "./style/app.scss";
</style>
