import React from 'react';
import {} from 'antd';
import './detail.less';

const GoodsDetail = () => {
  return (
    <div className="page-goods-detail">
      <div className="title">漆面日常保养</div>
      <div className="evaluate">
        <span>91%好评</span>“服务很认真，很仔细”
      </div>
      <div className="scroll-list">
        <div className="scroll-list-item">
          <img src={require('@/assets/goods/goods.png')} />
        </div>
        <div className="scroll-list-item">
          <img src={require('@/assets/goods/goods.png')} />
        </div>
        <div className="scroll-list-item">
          <img src={require('@/assets/goods/goods.png')} />
        </div>
      </div>
    </div>
  );
};
export default GoodsDetail;
