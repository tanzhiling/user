const routes = [
  { path: '/', component: '@/pages/home/index', title: '惠养车特惠洗车' },
  { path: '/search', component: '@/pages/search/search', title: '搜索' },
  {
    path: '/goodsDetail',
    component: '@/pages/goods/detail',
    title: '产品详情',
  },
  {
    path: '/storeDetail',
    component: '@/pages/store/detail',
    title: '门店详情',
  },
  {
    path: '/storeRank',
    component: '@/pages/store/rank',
    title: '排行榜',
  },
  {
    path: '/service',
    component: '@/pages/service/index',
    title: '全部服务',
  },
  {
    path: '/pay',
    component: '@/pages/pay/index',
    title: '收银台',
  },
  // { path: '/apply', component: '@/pages/apply/apply',title:'ETC商城商家入驻申请填写' },
  // { path: '/tips', component: '@/pages/tips/tips',title:'提交成功' },
  // { path: '/business', component: '@/pages/business/business',title:'商家详情' },
];
export default routes;
