<template>
  <article class="goods-detail">
    <!-- 标题 -->
    <v-title :title="title"></v-title>
    <!-- 轮播图 -->
    <v-swipe :list="lunboList"></v-swipe>
  	<!-- 商品购买 -->
    <div class="mui-card">
      <!-- 名称 -->
      <div class="mui-card-header">{{ goods.title }}</div>
      <!-- 价格 -->
      <div class="mui-card-content mui-card-content-inner">
        <div class="price"> <s>市场价:￥{{ goods.market_price }}</s> <span>销售价: </span> <em>￥{{ goods.sell_price }}</em> </div>
        <div> <span>购买数量：</span>
          <!--数字输入框 -->
          <v-counts :countValue="countValue" @change="getCount"></v-counts>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="mui-card-footer">
      	<button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</button>
        <div></div>
        <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加入购物车</button>
      </div>
    </div>

		<!-- 评论与介绍 -->
		<div class="mui-card">
			<!-- 选项卡 -->
		  <!--<mt-navbar v-model="selectedTab">
			  <mt-tab-item id="comment">商品评论</mt-tab-item>
			  <mt-tab-item id="info">图文介绍</mt-tab-item>
			</mt-navbar>-->
			<!-- 内容 -->
		  <!--<mt-tab-container v-model="selectedTab">-->
			  <!--<mt-tab-container-item id="comment">
			    <v-comment :id="id"></v-comment>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="info">
			    <v-info :id="id"></v-info>
			  </mt-tab-container-item>
			</mt-tab-container>-->

  <mt-navbar v-model="selected">
  <mt-tab-item id="1">商品评论</mt-tab-item>
  <mt-tab-item id="2">商品详情</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <v-comment :id="id"></v-comment>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <!--<mt-cell  :title="'测试 ' + n" />-->
  </mt-tab-container-item>

</mt-tab-container>
      
		</div>

  </article>
</template>

<script>
  import Config from '../../js/config.js';
  import Ctitle from '../common/title.vue';
  import Cswipe from '../common/swipe.vue';   //引入轮播图公共组件
  import Ccomment from '../common/comment.vue';
  // import Cinfo from './son/info.vue';
  import Ccounts from '../common/counts_tpl.vue'

  export default {

    data() {
      return {
        title: '商品购买',
        lunbos: [],
        goods: {},
        selected: '',
        id: this.$route.params.id,
        countValue:1,
        lunboList:[]   //传给子组件轮播图的数据
      }
    },

    methods: {
      // 获取轮播图数据
      getLunboList() {
        let url = Config.domain + "/api/getthumimages/"+this.id;
        this.$http.get(url).then(rep => {
          let body = rep.body;
          if(body.status == 0) {
            this.lunboList = body.message.map(item => {
              item.src = Config.imgDomain + item.src;
              return item;
            });
          }
          console.log(this.lunboList);
        });
      },
      // 获取商品价格信息
      getPrice() {
        let url = Config.domain + "/api/goods/getinfo/"+this.id;
        this.$http.get(url).then(rep => {
          let body = rep.body;
          if(body.status == 0) {
            this.goods = body.message[0];
            console.log(body.message);
          }
        });
      },
      //获取子组件传来的值,更新购物车总数量
      getCount(v){
        this.countValue=v;
        console.log(this.countValue);
      }
    },

    created() {
      this.getLunboList();
      this.getPrice();
    },
    
    components: {
      'v-title': Ctitle,
      'v-swipe': Cswipe,
      'v-comment': Ccomment,
      // 'v-info': Cinfo
      'v-counts':Ccounts
    }
  };
</script>

<style lang="less">
  .goods-detail {
    .mui-card-content {
      .price {
        color: rgb(51, 51, 51);
        margin-bottom: 4px;
        span {
          margin-left: 6px;
        }
        em {
          font-size: 18px;
          color: red;
        }
      }
    }
    .mui-card-footer {
      div {
        width: 100%;
      }
      .mui-btn {
        padding: 8px 0;
        font-size: 16px;
      }
    }
    .mint-tab-item {
    	&.is-selected {
    		margin-bottom: 0;
    		border-bottom: 3px solid #2ce094;
    		color: #2ce094;
    	}
    }
    .mint-tab-item-label {
    	font-size: 18px;
    	color: #2ce094;
    }
  }
</style>