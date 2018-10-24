import React from "react";
import ReactChartkick, { LineChart} from 'react-chartkick'
import Chart from 'chart.js'
 

const UserChart = (props) => (
  <div>
    <LineChart data={props.usage} min={900} max={1000} width="95%" height="400px" />
  </div>
);

export default UserChart;