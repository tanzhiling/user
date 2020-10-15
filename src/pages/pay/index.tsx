/**
 * 收银台
 */
import React from 'react';
import './index.less';

const PayPage = () => {
  return (
    <div className="page-pay">
      <div className="header">
        <div className="desc">SUV/MPV使用小车券需要另付商户现金5元</div>
        <div className="price">
          <span>￥</span>20.00
        </div>
        <div className="title">标准洗车（5座小车）</div>
        <div className="tabs">
          <div className="tabs-item">
            <img src={require('@/assets/icon-19.png')} />
            5座轿车-小车
          </div>
          <div className="tabs-active">
            <img src={require('@/assets/icon-20.png')} />
            5座轿车-小车
          </div>
        </div>
      </div>
      <div className="service">
        <span>服务原价</span>
        <span>￥30.00</span>
      </div>
      <div className="buy-btn">确认支付</div>
      <div className="problem">
        支付遇到问题？<a>联系客服</a>
      </div>
    </div>
  );
};
export default PayPage;
