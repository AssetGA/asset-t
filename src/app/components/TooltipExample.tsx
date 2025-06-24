import { useState } from "react";

export default function TooltipExample() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block text-center">
      {/* Элемент для наведения */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="px-4 py-2 bg-indigo-600 text-white rounded cursor-pointer"
      >
        Наведи на меня
      </div>

      {/* Подсказка */}
      {isHovered && (
        <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max max-w-xs px-3 py-2 bg-gray-800 text-white text-sm rounded shadow-lg transition-opacity duration-300 z-10">
          Это подсказка при наведении
        </div>
      )}
    </div>
  );
}
