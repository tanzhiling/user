/**
 * 排行榜
 */
import React from 'react';
import './rank.less';

const RankPage = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="page-rank">
      <div className="hd">
        <div className="left">周榜（09.14 ~ 09.20）</div>
        <div className="right">
          <img src={require('@/assets/icon-15.png')} />
          月榜
        </div>
      </div>
      <div className="bd">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div className="banner">
              <img src={require('@/assets/img-1.png')} />
              <div className="rank">
                <img
                  src={require(`@/assets/${
                    index > 2 ? 'rank' : `rank-${index}`
                  }.png`)}
                />
                {index > 2 && <span>{index + 1}</span>}
              </div>
            </div>
            <div className="card-bd">
              <h4>洗车人家汽车美容连锁机构 NO.1309</h4>
              <div className="star">
                <img src={require('@/assets/icon-9.png')} />
                5.0
              </div>
              <div className="address">
                <img src={require('@/assets/icon-16.png')} />
                重庆市渝中区长江一路76号附2号
              </div>
              <div className="count">
                <span className="view">
                  <img src={require('@/assets/icon-18.png')} />
                  7862
                </span>
                <span className="view">
                  <img src={require('@/assets/icon-1.png')} />
                  7862
                </span>
                <span className="comment">
                  <img src={require('@/assets/icon-2.png')} /> 1342
                </span>
                <span className="location">
                  <img src={require('@/assets/icon-17.png')} />
                  1.4kM
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankPage;
