import {Result, Button} from "antd";
import React from "react";
import {history} from 'umi'

const noMatch = (
  <Result
    status={403}
    title="403"
    subTitle="你没有权限访问此页"
    extra={<Button onClick={() => {
      history.push('/')
    }} type="primary">返回首页</Button>}
  />
);

export default noMatch
