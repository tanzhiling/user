/**
 * 门店详情
 */
import React, { useState } from 'react';
import { Carousel, Tabs } from 'antd';
import { Comment } from '@/components';
import './detail.less';

const service = ['洗车', '美容', '维修', '保养'];
const StoreDetailPage = () => {
  const [close, setClose] = useState(false); // 是否打烊
  const [serviceIndex, setServiceIndex] = useState(0); //  选择服务
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="page-store-detail">
      <div className="banner">
        {close && (
          <div className="mask">
            <div className="hd">
              <a>
                <img src={require('@/assets/icon-23.png')} />
              </a>
              <a>
                <img src={require('@/assets/icon-21.png')} />
              </a>
              <a>
                <img src={require('@/assets/icon-22.png')} />
              </a>
            </div>
            <div className="bd">
              <img src={require('@/assets/icon-26.png')} />
            </div>
          </div>
        )}
        <Carousel>
          {data.map(item => (
            <div key={item}>
              <img src={require('@/assets/img-1.png')} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="basic">
        <h4>洗车人家汽车美容连锁 NO.1385</h4>
        <div className="company">
          <div className="left">
            <img src={require('@/assets/icon-10.png')} />
            银辉联盟单位
          </div>
          <div className="right">
            <img src={require('@/assets/icon-11.png')} />
            <img src={require('@/assets/icon-12.png')} />
          </div>
        </div>
        <div className="time">营业时间：8:00-19:00</div>
        <div className="address">
          <span>重庆市渝中区长江一路76号附2号</span>
          <span>距您356m</span>
        </div>
        <div className="count">
          <span className="view">
            <img src={require('@/assets/icon-1.png')} />
            7862
          </span>
          <span className="comment">
            <img src={require('@/assets/icon-2.png')} /> 1342
          </span>
          <span className="star">
            <img src={require('@/assets/icon-9.png')} />
            5.0
          </span>
        </div>
      </div>
      <div className="tabs">
        <Tabs defaultActiveKey="1" centered>
          <Tabs.TabPane tab="服务" key="1"></Tabs.TabPane>
          <Tabs.TabPane tab="评价" key="2"></Tabs.TabPane>
          <Tabs.TabPane tab="简介" key="3"></Tabs.TabPane>
        </Tabs>
        <div className="service">
          <div className="title">
            <img src={require('@/assets/icon-25.png')} />
            商户服务
          </div>
          <div className="hd">
            {service.map((item, index) => (
              <div
                key={index}
                onClick={() => setServiceIndex(index)}
                className={`item ${serviceIndex === index ? 'active' : ''}`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="list">
            <div className="list-item">
              <span className="left">标准洗车(小轿车)</span>
              <span className="right">
                <s>￥30.00</s>
                <i>￥20.00</i>
              </span>
            </div>
            <div className="list-item">
              <span className="left">标准洗车(SUV/MPV)</span>
              <span className="right">
                <s>￥30.00</s>
                <i>￥20.00</i>
              </span>
            </div>
            <div className="list-item">
              <span className="left">清洗内饰</span>
              <span className="right">
                <s>￥30.00</s>
                <i>￥20.00</i>
              </span>
            </div>
          </div>
          <div className="all">
            <img src={require('@/assets/icon-14.png')} />
            全部服务
          </div>
        </div>
      </div>
      <Comment complaint />
      <div className="store-introduction">
        <div className="title">
          <img src={require('@/assets/icon-25.png')} />
          商户简介
        </div>
        <div className="bd">
          成立于2020年9月，我们坚持以最好的服务,服务大众。我们这里价格优惠，物品实惠。我们主营汽车清洗、汽车美容、汽车轮胎、装饰、维修等一系列汽车服务
        </div>
      </div>
      <div className="buy-btn">购买20元银辉联盟洗车优惠券</div>
    </div>
  );
};
export default StoreDetailPage;
