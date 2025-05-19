// src/components/charts/CasosPorAnioChart.tsx
"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface CasosPorAnioChartProps {
  data: { anio: string; cantidad: number }[];
}

export const CasosPorAnioChart: React.FC<CasosPorAnioChartProps> = ({ data }) => (
  <div className="bg-[#111111] text-white rounded-xl p-4 shadow-lg mb-20">
    <h3 className="text-5xl font-semibold mb-6 text-center">
        Femicidios por año
      </h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="anio" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Bar dataKey="cantidad" fill="#E53E3E" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);