import React from 'react';
import styles from './search.less';
import { Input } from 'antd';
import { Button } from 'antd';

export default () => {
  return (
    <div className={styles.main}>
      <div className={styles.search}>
        <Input placeholder="店铺名称/地址" />
        <Button type={'/'}>搜索</Button>
      </div>
    </div>
  );
}
