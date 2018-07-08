<template>
	<div>
    <img
      :src="src"
      alt="">
  </div>
</template>
<script>
var options = {
  src: {
    type: 'input',
    label: '图片地址',
    value: ''
  },
  
};
export default {
  name: 'chameleon-image',
  props: {
      src: {
        type: String,
        default: ''
      },
      mountedHandle: {
        type: Function
      }
  },
  data() {
    return {}
  },
  mounted() {
    this.mountedHandle(options);
  }
}
</script>
<style lang="less" scoped>

</style>

