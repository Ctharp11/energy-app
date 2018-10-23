import React from "react";
import ReactChartkick, { LineChart} from 'react-chartkick'
import Chart from 'chart.js'
 

const UserChart = (props) => (
  <div>
  {console.log(props.usage)}
  <LineChart data={props.usage} />
  
  </div>
);

export default UserChart;