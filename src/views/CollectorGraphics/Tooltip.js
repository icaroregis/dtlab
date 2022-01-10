import React from 'react';
import { G, Rect, Text } from 'react-native-svg';
import moment from 'moment';

const Tooltip = ({
  // eslint-disable-next-line react/prop-types
  x,
  y,
  tooltipX,
  tooltipY,
  color,
  index,
  dataLength,
  measure,
  id,
}) => {
  let xAxis = 4;
  if (dataLength > 4) {
    if (index < 9) {
      xAxis = 35;
    } else if (index > dataLength - 2) {
      xAxis = -20;
    } else {
      xAxis = 4;
    }
  }

  return (
    <G x={x(tooltipX) - 40} y={y(tooltipY)}>
      <G y={tooltipY > 9 ? -29 : -29} x={xAxis <= 4 ? -70 : xAxis}>
        <Rect
          x={-2}
          y={0}
          height={22}
          width={110}
          stroke={color}
          fill="white"
          ry={10}
          rx={10}
        />
        <Rect
          x={-2}
          y={0}
          height={22}
          width={18}
          fill={color}
          ry={10}
          rx={10}
        />
        <Rect x={10} y={0} height={22} width={50} fill={color} />
        <Text x={6} y={14} stroke="#fff">
          {parseFloat(tooltipY).toFixed(2) + ' ' + measure}
        </Text>
        <Text x={tooltipY > 9 ? 65 : 62} y={14} fill="#000">
          {moment(tooltipX).format('HH:mm')}
        </Text>
      </G>
    </G>
  );
};

export default Tooltip;
