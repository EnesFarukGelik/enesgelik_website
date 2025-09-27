import React from 'react';

interface TechData {
  name: string;
  percentage: number;
  color: string;
}

interface TechChartProps {
  data: TechData[];
  title?: string;
  className?: string;
}

const TechChart: React.FC<TechChartProps> = ({ 
  data, 
  title = "Teknoloji Dağılımı",
  className = ""
}) => {
  const total = data.reduce((sum, item) => sum + item.percentage, 0);
  
  let cumulativePercentage = 0;

  return (
    <div className={`bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 ${className}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h3>
      <div className="flex flex-col items-center">
        {/* Pasta Grafiği */}
        <div className="relative w-48 h-48 mb-6">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {data.map((item, index) => {
              const strokeDasharray = `${item.percentage * 2.51} 251`;
              const strokeDashoffset = `-${cumulativePercentage * 2.51}`;
              cumulativePercentage += item.percentage;
              
              return (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                />
              );
            })}
          </svg>
          
          {/* Merkez yüzde */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{total.toFixed(1)}%</div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="space-y-3 w-full">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
              </div>
              <span 
                className="text-sm font-bold"
                style={{ color: item.color }}
              >
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechChart;
