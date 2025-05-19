import React from 'react';
import ReactECharts from 'echarts-for-react';

interface HeatmapDataItem {
    region: string;
    [year: string]: string | number;
  }
  
  interface HeatmapEChartsProps {
    data: HeatmapDataItem[];
  }

export const HeatmapECharts: React.FC<HeatmapEChartsProps> = ({ data }) => {
    if (!data || data.length === 0 || !data[0]) return null;

    // Obtener todos los años como claves (excluyendo "region"), ordenadas
    const keys = Object.keys(data[0])
      .filter((k) => k !== "region")
      .sort((a, b) => Number(a) - Number(b));

  // Obtener lista de años únicos, asumiendo que todos los objetos tienen los mismos años
  const years = Object.keys(data[0]).filter((k) => k !== 'region');
  const regions = data.map((d) => d.region);

  // Generar datos en formato [col, row, value]
  const heatmapData: [number, number, number][] = [];

  data.forEach((row, rowIndex) => {
    years.forEach((year, colIndex) => {
      const value = row[year];
      heatmapData.push([colIndex, rowIndex, typeof value === 'number' ? value : 0]);
    });
  });

  const option = {
    tooltip: {
      position: 'top',
      formatter: (params: any) => {
        const region = regions[params.value[1]];
        const year = years[params.value[0]];
        return `${region} - ${year}: ${params.value[2]}`;
      },
    },
    grid: {
      height: '70%',
      top: '10%',
    },
    xAxis: {
      type: 'category',
      data: years,
      axisLabel: { color: '#fff' },
      axisLine: { lineStyle: { color: '#444' } },
    },
    yAxis: {
      type: 'category',
      data: regions,
      axisLabel: { color: '#fff' },
      axisLine: { lineStyle: { color: '#444' } },
    },
    visualMap: {
      min: 0,
      max: Math.max(...heatmapData.map((d) => d[2])),
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '5%',
      textStyle: { color: '#fff' },
      inRange: {
        color: ['#ff9999', '#cc0000', '#440000'],
      },
    },
    series: [
      {
        name: 'Casos',
        type: 'heatmap',
        data: heatmapData,
        label: {
          show: true,
          color: '#fff',
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <div className="bg-[#111] text-white rounded-xl p-4 shadow-lg">
      <h3 className="text-5xl font-semibold mb-6 text-center">
        Femicidios por región y año
      </h3>
      <ReactECharts option={option} style={{ height: 600, width: '100%' }} />
    </div>
  );
};
