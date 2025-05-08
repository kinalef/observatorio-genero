"use client";

import React from 'react';
import ReactECharts from 'echarts-for-react';
import 'echarts-wordcloud'; // ⬅️ IMPORTANTE

interface WordCloudDatum {
  name: string;
  value: number;
}

interface RelacionAgresorWordCloudProps {
  data: { text: string; value: number }[];
}

export const RelacionAgresorWordCloud: React.FC<RelacionAgresorWordCloudProps> = ({ data }) => {
  console.log("WordCloud data:", data); // DEBUG

  const wordData: WordCloudDatum[] = data.map((item) => ({
    name: item.text,
    value: item.value,
  }));

  const option = {
    tooltip: {
      show: true,
      formatter: (params: any) => `${params.name}: ${params.value}`,
    },
    series: [
      {
        type: 'wordCloud',
        shape: 'circle',
        left: 'center',
        top: 'center',
        width: '100%',
        height: '100%',
        sizeRange: [12, 60],
        rotationRange: [0, 0],
        rotationStep: 15,
        gridSize: 8,
        drawOutOfBound: false,
        textStyle: {
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: () => {
            const colors = ['#a00', '#c22', '#e44', '#fff'];
            return colors[Math.floor(Math.random() * colors.length)];
          },
        },
        emphasis: {
          textStyle: {
            shadowBlur: 10,
            shadowColor: '#333',
          },
        },
        data: wordData,
      },
    ],
  };

  return (
    <div className="bg-[#111] text-white rounded-xl p-4 shadow-lg">
      <h3 className="text-3xl font-semibold mb-6 text-center">
        Relación con el agresor
      </h3>
      <ReactECharts option={option} style={{ height: 500, width: '100%' }} />
    </div>
  );
};