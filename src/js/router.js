//导包
import VueRouter from "vue-router";
//导入组件
import Cindex from "../component/index/index.vue";
import CnewsList from "../component/news/list.vue";
import CnewsDetails from "../component/news/details.vue";
import Cphoto from "../component/photos/photo_list.vue";
import Cdetails from "../component/photos/photo_details.vue";
import Cgoodslist from "../component/goods/goods_list.vue";
import Cgoodsdetails from "../component/goods/goods_details.vue";

export default new VueRouter({
    routes: [  //配置路由
        { path: '/', redirect: '/index' },
        { path: '/index', component: Cindex },
        { path: '/news/list', component: CnewsList},
        { path: '/news/details/:id', component: CnewsDetails},
        { path: '/photo/list/:id', component:Cphoto},
        { path: '/photo/details/:id', component:Cdetails},
        { path: '/goods/list/:page', component:Cgoodslist},
        { path: '/goods/details/:id', component:Cgoodsdetails,name:"goodsD"}
    ]
});