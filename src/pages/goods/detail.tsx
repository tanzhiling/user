/**
 * 产品详情
 */
import React from 'react';
import { Comment } from '@/components';
import './detail.less';

const GoodsDetail = () => {
  return (
    <div className="page-goods-detail">
      <div className="header">
        <div className="title">漆面日常保养</div>
        <div className="evaluate">
          <span>91%好评</span>“服务很认真，很仔细”
        </div>
        <div className="scroll-list">
          <div className="scroll-list-item">
            <img src={require('@/assets/img-2.png')} />
          </div>
          <div className="scroll-list-item">
            <img src={require('@/assets/img-2.png')} />
          </div>
          <div className="scroll-list-item">
            <img src={require('@/assets/img-2.png')} />
          </div>
        </div>
        <div className="desc">
          <div className="price">
            ￥250.00
            <s>￥335.00</s>
          </div>
          <div className="comment">
            <div className="comment-item">
              <img src={require('@/assets/icon-1.png')} />
              19542
            </div>
            <div className="comment-item">
              <img src={require('@/assets/icon-2.png')} />
              13561
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="service">
          <div className="title">
            <img src={require('@/assets/icon-3.png')} />
            服务内容
          </div>
          <ul className="list">
            <li className="list-item">
              <span>
                ·&nbsp;普通洗车<i>（1次）</i>
              </span>
              <span>￥35.00</span>
            </li>
            <li className="list-item">
              <span>
                ·&nbsp;漆面抛光<i>（1次）</i>
              </span>
              <span>￥300.00</span>
            </li>
          </ul>
        </div>
        <div className="buy">
          <div className="title">
            <img src={require('@/assets/icon-4.png')} />
            购买须知
          </div>
          <div className="remark">打蜡后三天不宜洗车</div>
        </div>
        <div className="shop">
          <div className="title">
            <img src={require('@/assets/icon-5.png')} />
            商户信息
          </div>
          <div className="card">
            <img className="sd" src={require('@/assets/img-3.png')} />
            <div className="info">
              <h4>威洁士高端汽车养护会所</h4>
              <div className="star">
                <img src={require('@/assets/icon-9.png')} />
                5.0
              </div>
              <div className="address">重庆市渝中区鹅岭轻轨站1号出口旁</div>
              <div className="location">距您100M</div>
            </div>
            <img className="arrow" src={require('@/assets/arrow.png')} />
          </div>
        </div>
      </div>
      <Comment />
      <div className="buy-btn">立即购买</div>
    </div>
  );
};
export default GoodsDetail;
