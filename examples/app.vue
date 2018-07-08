<template>
  <div id="app">
    <chameleon-image 
      :src="imgSrc"
      :mountedHandle="mHandle">

    </chameleon-image>
  </div>
</template>
<script>
  
  export default {
    name: 'app',
    data() {
      return {
        imgSrc: 'https://cn.vuejs.org/images/logo.png'
      }
    },
    methods: {
      mHandle(options) {
        console.log(options);
      }
    }
  }

</script>
<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    .button-group{
      margin-bottom: 20px;
    }
    .will{
      color: red;
      margin-left: 10px;
    }
    .notDisplay{
      display: none;
    }
    .display{
      display: table;
    }
    .el-table .warning-row {
      background: oldlace;
    }
    .el-table .success-row {
      background: #f0f9eb;
    }
    .row-class{
      &:nth-child(1){
        background: oldlace;
      }
    }
  }
</style>
