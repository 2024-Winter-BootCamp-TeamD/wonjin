// DonutChart.js
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function DonutChart() {

  const options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Donut Chart Example'
    },
    plotOptions: {
      pie: {
        innerSize: '60%', 
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y}%'
        }
      }
    },
    series: [
      {
        name: 'Share',
        data: [
          { name: 'Chrome', y: 63.59 },
          { name: 'Edge', y: 12.55 },
          { name: 'Firefox', y: 9.15 },
          { name: 'Safari', y: 4.67 },
          { name: 'Opera', y: 2.61 },
          { name: 'Others', y: 7.43 }
        ]
      }
    ]
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
}

export default DonutChart;
