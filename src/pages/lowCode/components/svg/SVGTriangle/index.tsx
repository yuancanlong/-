import { useEffect, useRef, useState } from 'react';
import styles from './index.less';
const SVGTriangle = ({ ...props }: any) => {
  const [points, setPoints] = useState('');

  console.log(props, '222');
  const drawTriangle = (width: any, height: any) => {
    // 五角星十个坐标点的比例集合
    const points = [
      [0.5, 0.05],
      [1, 0.95],
      [0, 0.95],
    ];
    const coordinatePoints = points.map(
      (point) => width * point[0] + ' ' + height * point[1],
    );
    setPoints(coordinatePoints.toString());
  };
  useEffect(() => {
    const { width, height } = props.style;
    drawTriangle(width, height);
  }, []);
  const triangle = useRef<any>();

  return (
    <div className={styles.svgTriangleContainer}>
      <svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
        <polygon
          ref={triangle}
          points={points}
          stroke={props?.style?.borderColor}
          fill={props?.style?.backgroundColor}
          strokeWidth="1"
        />
      </svg>
      {/* <v-text propValue="props.propValue" element="element" /> */}
    </div>
  );
};
export default SVGTriangle;
