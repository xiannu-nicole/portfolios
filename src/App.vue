<script>
  import sidebar from './sidebar.vue'
  import portfolios from './portfolios.vue'
  export default {
    components:{
      portfolios,
      sidebar
    },
    data(){
      return{
        overlay:'',
      }
    },

    methods:{
      showOverlay(value){
       this.overlay =  value
      }
    }
  }
</script>


<template>
  <div>
    <div id="overlay"  @click="overlay =! overlay" :class="overlay === true ? 'show' : ''"></div>
    <portfolios></portfolios>
    <sidebar :overlay="overlay" @overlay="showOverlay"></sidebar>
  </div>
</template>


<style lang="scss" scoped>
#overlay{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #00000080;
  z-index: 999999;
  display: none;
  &.show{
    display: block;
  }
}
</style>
