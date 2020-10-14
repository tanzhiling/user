import React from 'react';
import styles from './index.less';
import { Carousel } from 'antd';
import imgIcon01 from  './imgIcon01.png';
import imgIcon02 from  './imgIcon02.png';
import imgIcon03 from  './imgIcon03.png';
import { Button } from 'antd';
import imgIcon14 from './imgIcon14.png';
import imgIcon15 from './imgIcon15.png';
var ReactDOM = require('react-dom');
import Footer from '../public/footer/footer';
import { Anchor } from 'antd';

const { Link } = Anchor;

export default () => {
  return (
    <div>
      <div className={styles.upper}>
        <div className={styles.banner}>
          <Carousel autoplay>
            <div>
              <a href={'/'}>
                <img src={imgIcon01} />
              </a>
            </div>
            <div>
              <a href={'/'}>
                <img src={imgIcon02} />
              </a>
            </div>
            <div>
              <a href={'/'}>
                <img src={imgIcon03} />
              </a>
            </div>
          </Carousel>
        </div>
        <div className={styles.poster}>
          <div className={styles.text}>
            <h4>重庆市·标准洗车一次<span>￥20.00</span></h4>
            <h5>原价￥30.00 全城以下商户均可使用</h5>
          </div>
          <Button type="primary">立即购买</Button>
        </div>
      </div>
      <div className={styles.main} id={'a'}>
        <Anchor className={styles.nav}>
          <a href={'#a'} className={styles.screen}>
            <h4>筛选</h4>
          </a >
          <a href={'#a'} className={styles.sort}>
            <h4>综合排序</h4>
          </a>
          <a href={'/search'} className={styles.search}>
            <h4>搜索</h4>
          </a>
          <a href={'/'} className={styles.ranking}>
            <h4>排行榜</h4>
          </a>
        </Anchor>
        <div className={styles.screenMain} style={{display:'none'}}>
          <h4>距离</h4>
          <ul>
            <li className={styles.select}>不限</li>
            <li>1KM以内</li>
            <li>2KM以内</li>
            <li>3KM以内</li>
            <li>5KM以内</li>
            <li>10KM以内</li>
            <div className={styles.clear}> </div>
          </ul>
          <h4>商户评分</h4>
          <ul>
            <li className={styles.select}>不限</li>
            <li>≥ 3分</li>
            <li>≥ 4分</li>
            <li>5分</li>
            <div className={styles.clear}> </div>
          </ul>
          <h4>商户属性</h4>
          <ul>
            <li className={styles.select}>不限</li>
            <li>4S店</li>
            <li>洗美门店</li>
            <li>服务站</li>
            <li>综合小修</li>
            <li>连锁维修</li>
            <div className={styles.clear}> </div>
          </ul>
          <div className={styles.btn}>
            <div className={styles.reset}>重置</div>
            <div className={styles.confirm}>确定</div>
          </div>
        </div>
        <div className={styles.sortMain} style={{display:'none'}}>
          <ul>
            <li className={styles.default}>综合排序</li>
            <li>评分由高到低</li>
            <li>服务次数由高到低</li>
          </ul>
        </div>
        <div className={styles.list}>
          <ul>
            <li>
              <a href={'/'}>
                <div className={styles.cover}
                     // style={{background: 'url(./static/imgIcon01.png)  no-repeat center center',
                     //   backgroundSize: 'cover',}}
                >
                  <div className={styles.close} style={{display: 'block'}}>
                    <img src={imgIcon14}/>
                  </div>
                  <div className={styles.closed} style={{display: 'none'}}>
                    <img src={imgIcon15}/>
                  </div>
                </div>
                <div className={styles.content}>
                  <h4>威洁士高端汽车养护会所</h4>
                  <div className={styles.score}>
                    <div className={styles.fraction}>
                      <em> </em>
                    </div>
                    <h4>5.0</h4>
                  </div>
                  <h5 className={styles.add}>重庆市渝中区鹅岭轻轨站1号出口旁</h5>
                  <div className={styles.label}>
                    <h5 className={styles.service}>19542</h5>
                    <h5 className={styles.comment}>13561</h5>
                    <h5 className={styles.distance}>1.4KM</h5>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href={'/'}>
                <div className={styles.cover}
                     // style={{background: 'url(../imgIcon01.png)  no-repeat center center',
                     //   backgroundSize: 'cover',}}
                >
                  <div className={styles.close} style={{display: 'none'}}>
                    <img src={imgIcon14}/>
                  </div>
                  <div className={styles.closed} style={{display: 'block'}}>
                    <img src={imgIcon15}/>
                  </div>
                </div>
                <div className={styles.content}>
                  <h4>威洁士高端汽车养护会所</h4>
                  <div className={styles.score}>
                    <div className={styles.fraction}>
                      <em> </em>
                    </div>
                    <h4>5.0</h4>
                  </div>
                  <h5 className={styles.add}>重庆市渝中区鹅岭轻轨站1号出口旁</h5>
                  <div className={styles.label}>
                    <h5 className={styles.service}>19542</h5>
                    <h5 className={styles.comment}>13561</h5>
                    <h5 className={styles.distance}>1.4KM</h5>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href={'/'}>
                <div className={styles.cover}
                  // style={{background: 'url(../imgIcon01.png)  no-repeat center center',
                  //   backgroundSize: 'cover',}}
                >
                  <div className={styles.close} style={{display: 'none'}}>
                    <img src={imgIcon14}/>
                  </div>
                  <div className={styles.closed} style={{display: 'none'}}>
                    <img src={imgIcon15}/>
                  </div>
                </div>
                <div className={styles.content}>
                  <h4>威洁士高端汽车养护会所</h4>
                  <div className={styles.score}>
                    <div className={styles.fraction}>
                      <em style={{width:'1.265rem'}}> </em>
                    </div>
                    <h4>4.5</h4>
                  </div>
                  <h5 className={styles.add}>重庆市渝中区鹅岭轻轨站1号出口旁</h5>
                  <div className={styles.label}>
                    <h5 className={styles.service}>19542</h5>
                    <h5 className={styles.comment}>13561</h5>
                    <h5 className={styles.distance}>1.4KM</h5>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href={'/'}>
                <div className={styles.cover}
                  // style={{background: 'url(../imgIcon01.png)  no-repeat center center',
                  //   backgroundSize: 'cover',}}
                >
                  <div className={styles.close} style={{display: 'none'}}>
                    <img src={imgIcon14}/>
                  </div>
                  <div className={styles.closed} style={{display: 'none'}}>
                    <img src={imgIcon15}/>
                  </div>
                </div>
                <div className={styles.content}>
                  <h4>威洁士高端汽车养护会所</h4>
                  <div className={styles.score}>
                    <div className={styles.fraction}>
                      <em style={{width:'1.265rem'}}> </em>
                    </div>
                    <h4>4.5</h4>
                  </div>
                  <h5 className={styles.add}>重庆市渝中区鹅岭轻轨站1号出口旁</h5>
                  <div className={styles.label}>
                    <h5 className={styles.service}>19542</h5>
                    <h5 className={styles.comment}>13561</h5>
                    <h5 className={styles.distance}>1.4KM</h5>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href={'/'}>
                <div className={styles.cover}
                  // style={{background: 'url(../imgIcon01.png)  no-repeat center center',
                  //   backgroundSize: 'cover',}}
                >
                  <div className={styles.close} style={{display: 'none'}}>
                    <img src={imgIcon14}/>
                  </div>
                  <div className={styles.closed} style={{display: 'none'}}>
                    <img src={imgIcon15}/>
                  </div>
                </div>
                <div className={styles.content}>
                  <h4>威洁士高端汽车养护会所</h4>
                  <div className={styles.score}>
                    <div className={styles.fraction}>
                      <em style={{width:'1.265rem'}}> </em>
                    </div>
                    <h4>4.5</h4>
                  </div>
                  <h5 className={styles.add}>重庆市渝中区鹅岭轻轨站1号出口旁</h5>
                  <div className={styles.label}>
                    <h5 className={styles.service}>19542</h5>
                    <h5 className={styles.comment}>13561</h5>
                    <h5 className={styles.distance}>1.4KM</h5>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href={'/'}>
                <div className={styles.cover}
                  // style={{background: 'url(../imgIcon01.png)  no-repeat center center',
                  //   backgroundSize: 'cover',}}
                >
                  <div className={styles.close} style={{display: 'none'}}>
                    <img src={imgIcon14}/>
                  </div>
                  <div className={styles.closed} style={{display: 'none'}}>
                    <img src={imgIcon15}/>
                  </div>
                </div>
                <div className={styles.content}>
                  <h4>威洁士高端汽车养护会所</h4>
                  <div className={styles.score}>
                    <div className={styles.fraction}>
                      <em style={{width:'1.265rem'}}> </em>
                    </div>
                    <h4>4.5</h4>
                  </div>
                  <h5 className={styles.add}>重庆市渝中区鹅岭轻轨站1号出口旁</h5>
                  <div className={styles.label}>
                    <h5 className={styles.service}>19542</h5>
                    <h5 className={styles.comment}>13561</h5>
                    <h5 className={styles.distance}>1.4KM</h5>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href={'/'}>
                <div className={styles.cover}
                  // style={{background: 'url(../imgIcon01.png)  no-repeat center center',
                  //   backgroundSize: 'cover',}}
                >
                  <div className={styles.close} style={{display: 'none'}}>
                    <img src={imgIcon14}/>
                  </div>
                  <div className={styles.closed} style={{display: 'none'}}>
                    <img src={imgIcon15}/>
                  </div>
                </div>
                <div className={styles.content}>
                  <h4>威洁士高端汽车养护会所</h4>
                  <div className={styles.score}>
                    <div className={styles.fraction}>
                      <em style={{width:'1.265rem'}}> </em>
                    </div>
                    <h4>4.5</h4>
                  </div>
                  <h5 className={styles.add}>重庆市渝中区鹅岭轻轨站1号出口旁</h5>
                  <div className={styles.label}>
                    <h5 className={styles.service}>19542</h5>
                    <h5 className={styles.comment}>13561</h5>
                    <h5 className={styles.distance}>1.4KM</h5>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href={'/'}>
                <div className={styles.cover}
                  // style={{background: 'url(../imgIcon01.png)  no-repeat center center',
                  //   backgroundSize: 'cover',}}
                >
                  <div className={styles.close} style={{display: 'none'}}>
                    <img src={imgIcon14}/>
                  </div>
                  <div className={styles.closed} style={{display: 'none'}}>
                    <img src={imgIcon15}/>
                  </div>
                </div>
                <div className={styles.content}>
                  <h4>威洁士高端汽车养护会所</h4>
                  <div className={styles.score}>
                    <div className={styles.fraction}>
                      <em style={{width:'1.265rem'}}> </em>
                    </div>
                    <h4>4.5</h4>
                  </div>
                  <h5 className={styles.add}>重庆市渝中区鹅岭轻轨站1号出口旁</h5>
                  <div className={styles.label}>
                    <h5 className={styles.service}>19542</h5>
                    <h5 className={styles.comment}>13561</h5>
                    <h5 className={styles.distance}>1.4KM</h5>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href={'/'}>
                <div className={styles.cover}
                  // style={{background: 'url(../imgIcon01.png)  no-repeat center center',
                  //   backgroundSize: 'cover',}}
                >
                  <div className={styles.close} style={{display: 'none'}}>
                    <img src={imgIcon14}/>
                  </div>
                  <div className={styles.closed} style={{display: 'none'}}>
                    <img src={imgIcon15}/>
                  </div>
                </div>
                <div className={styles.content}>
                  <h4>威洁士高端汽车养护会所</h4>
                  <div className={styles.score}>
                    <div className={styles.fraction}>
                      <em style={{width:'1.265rem'}}> </em>
                    </div>
                    <h4>4.5</h4>
                  </div>
                  <h5 className={styles.add}>重庆市渝中区鹅岭轻轨站1号出口旁</h5>
                  <div className={styles.label}>
                    <h5 className={styles.service}>19542</h5>
                    <h5 className={styles.comment}>13561</h5>
                    <h5 className={styles.distance}>1.4KM</h5>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href={'/'}>
                <div className={styles.cover}
                  // style={{background: 'url(../imgIcon01.png)  no-repeat center center',
                  //   backgroundSize: 'cover',}}
                >
                  <div className={styles.close} style={{display: 'none'}}>
                    <img src={imgIcon14}/>
                  </div>
                  <div className={styles.closed} style={{display: 'none'}}>
                    <img src={imgIcon15}/>
                  </div>
                </div>
                <div className={styles.content}>
                  <h4>威洁士高端汽车养护会所</h4>
                  <div className={styles.score}>
                    <div className={styles.fraction}>
                      <em style={{width:'1.265rem'}}> </em>
                    </div>
                    <h4>4.5</h4>
                  </div>
                  <h5 className={styles.add}>重庆市渝中区鹅岭轻轨站1号出口旁</h5>
                  <div className={styles.label}>
                    <h5 className={styles.service}>19542</h5>
                    <h5 className={styles.comment}>13561</h5>
                    <h5 className={styles.distance}>1.4KM</h5>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
