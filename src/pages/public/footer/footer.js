import React from 'react';
import styles from './footer.less';
import ReactDOM from 'react-dom';

export default class ComponentFooter extends React.Component{
  render(){
    return(
      <div>
        <div className={styles.footer}>
          <ul>
            <li>
              <a className={styles.hover} href={'/'}>
                <div className={styles.wash}></div>
                <h4>洗车</h4>
              </a>
            </li>
            <li>
              <a href={'/'}>
                <div className={styles.center}></div>
                <h4>我的</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
