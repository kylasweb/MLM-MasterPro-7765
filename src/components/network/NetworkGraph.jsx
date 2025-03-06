import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as echarts from 'echarts';

const NetworkGraph = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }

      const chart = echarts.init(chartRef.current);
      chartInstance.current = chart;

      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}'
        },
        series: [
          {
            type: 'tree',
            data: [data],
            top: '10%',
            bottom: '10%',
            layout: 'orthogonal',
            symbol: 'circle',
            symbolSize: 12,
            initialTreeDepth: 3,
            lineStyle: {
              color: '#ccc',
              width: 1.5,
              curveness: 0.5
            },
            label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              fontSize: 12
            },
            leaves: {
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            },
            emphasis: {
              focus: 'descendant'
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      };

      chart.setOption(option);

      const handleResize = () => {
        chart.resize();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.dispose();
      };
    }
  }, [data]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-white p-4 rounded-lg shadow-sm"
    >
      <div ref={chartRef} style={{ height: '600px' }} className="w-full" />
    </motion.div>
  );
};

export default NetworkGraph;