<template>
  
  <footer class="footer">
      <div class="box"></div>
      <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item" href="#tabbar">
          <!--点击跳转到首页-->
          <router-link to="/index">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
          </router-link>
        </a>
        <a class="mui-tab-item mui-active" href="#tabbar-with-chat">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">消息</span>
          </router-link>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-contact">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">通讯录</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-map">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">设置</span>
        </a>
      </nav>
      
  </footer>
</template>

<script>
export default {

}
</script>

<style>
   .footer .box {
     height: 50px;
   }
</style>
