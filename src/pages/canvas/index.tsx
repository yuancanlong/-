import { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import React from 'react';
import { Button, Descriptions, Divider, List, Typography } from 'antd';

const Canvas = () => {
  const test = React.createRef<HTMLDivElement>();
  const [url, setUrl] = useState<any>();

  useEffect(() => {
    html2canvas(document.getElementById('test') as HTMLElement).then(
      (canvas) => {
        canvas.toBlob((blob) => {
          setUrl(blob);
        });
      },
    );
  }, []);
  const open = () => {
    var newUrl = window.URL.createObjectURL(url);
    let newPageWindow = window.open(newUrl);
    if (newPageWindow) {
      newPageWindow.onload = function () {
        newPageWindow?.print();
        newPageWindow = null;
        window.URL.revokeObjectURL(url);
      };
    }
  };

  return (
    <>
      <p id="test">
        <Descriptions title="User Info">
          <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
        <Divider dashed={true}></Divider>
      </p>
      <p onClick={open}>open</p>
    </>
  );
};
export default Canvas;
