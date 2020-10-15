/**
 *  全部服务
 */

import React from 'react';
import { Tabs } from 'antd';
import './index.less';

const ServicePage = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="page-service">
      <div className="tabs">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="全部" key="1"></Tabs.TabPane>
          <Tabs.TabPane tab="洗车" key="2"></Tabs.TabPane>
          <Tabs.TabPane tab="美容" key="3"></Tabs.TabPane>
          <Tabs.TabPane tab="维修" key="4"></Tabs.TabPane>
          <Tabs.TabPane tab="保养" key="5"></Tabs.TabPane>
          <Tabs.TabPane tab="轮胎" key="6"></Tabs.TabPane>
        </Tabs>
      </div>
      <div className="content">
        {data.map(item => (
          <div className="card" key={item}>
            <img src={require('@/assets/img-1.png')} />
            <div className="info">
              <div className="title">
                <span className="left">标准洗车（SUV/MPV）</span>
                <span className="right">
                  <s>￥30.00</s>
                  <i>￥20.00</i>
                </span>
              </div>
              <p>万泡清洗仪表台、门板、座椅、顶棚、地板、后备...</p>
            </div>
          </div>
        ))}
      </div>
      <div className="buy-btn">购买20元银辉联盟洗车优惠券</div>
    </div>
  );
};
export default ServicePage;
