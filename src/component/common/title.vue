<template>
    <section class="list mint-header"  style="background:#7378a7">
    <div class="mint-header-button is-left">
      <button  @click="rollback" class="mint-button mint-button--default mint-button--normal">
        <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
        <label class="mint-button-text">返回</label>
      </button>
    </div>
    <h1 class="mint-header-title">{{ title }}</h1> 
    <div class="mint-header-button is-right"></div>
  </section>
</template>

<script>
export default {
   props:["title"] ,   //用此方式获取父组件的数据
   methods:{
      rollback:function(){
          this.$router.go(-1);
      }
  }
}
</script>
<style>

</style>

