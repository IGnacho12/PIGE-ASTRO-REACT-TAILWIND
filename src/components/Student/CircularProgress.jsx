import React from "react";

export default function CircularProgress({ percentage = 0, label = "" }) {
  const radius = 70;
  const stroke = 12;
  const extraStroke = 7;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const size = (radius + extraStroke) * 2;

  return (
    <div className="relative flex flex-col items-center justify-center clear-start">
      <svg height={size} width={size} className="-rotate-90">
        <defs>
          <defs>
            <linearGradient id="gradienteCircular" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#575757" /> {/* azul-400 abajo */}
              <stop offset="100%" stopColor="#000000" />{" "}
              {/* indigo-800 arriba */}
            </linearGradient>
          </defs>
        </defs>

        {/* Fondo gris */}
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={stroke + extraStroke}
          r={normalizedRadius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Barra con gradiente */}
        <circle
          stroke="url(#gradienteCircular)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={size / 2}
          cy={size / 2}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>

      {/* Texto centrado */}
      <div className="absolute flex flex-col items-center justify-center inset-0">
        <span className="text-xl font-bold">{percentage}%</span>
        <span className="text-gray-500">{label}</span>
      </div>
    </div>
  );
}
