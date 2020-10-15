import React from 'react';
import './index.less';

const Comment = ({ evaluate = true, complaint = false }) => {
  const data = [1, 2, 3];
  return (
    <div className="component-comment">
      <div className="component-comment-title">
        <div className="left">
          <img src={require('@/assets/icon-6.png')} />
          大家都这么说
        </div>
        <div className="right">
          查看全部
          <img src={require('@/assets/arrow.png')} />
        </div>
      </div>
      {data.map(item => (
        <div className="component-comment-list" key={item}>
          <div className="hd">
            <div className="left">
              <img className="avatar" src={require('@/assets/icon-7.png')} />
              <span>清***林</span>
              <div className="star">
                <img src={require('@/assets/icon-9.png')} />
                5.0
              </div>
            </div>
            <div className="right">五分钟前</div>
          </div>
          <div className="service">购买服务：清洗内饰</div>
          <div className="remark">
            <p>工作人员很负责认真，洗清内饰很仔细，很干净。</p>
            <div className="imgList">
              {data.map(item => (
                <img key={item} src={require('@/assets/img-4.png')} />
              ))}
            </div>
          </div>
          <div className="reply">
            <span>{`[商家回复]`}</span>
            感谢您的肯定，我们会竭力做得更好！！！
          </div>
        </div>
      ))}
      {evaluate && (
        <div className="component-comment-action">
          <a>
            <img src={require('@/assets/icon-8.png')} />
            我来评价
          </a>
          {complaint && (
            <a>
              <img src={require('@/assets/icon-24.png')} />
              我要投诉
            </a>
          )}
        </div>
      )}
    </div>
  );
};
export default Comment;
