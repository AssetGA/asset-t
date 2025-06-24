"use client";

import React, { useEffect, useRef } from "react";

const CanvasBlocks: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const directionRef = useRef(1); // 1 = вправо, -1 = влево
  const blocksRef = useRef<number[]>([]);
  const huesRef = useRef<number[]>([]); // Цветовой тон каждого блока

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = 200);

    const blockWidth = 60;
    const blockHeight = 300;
    const speed = 1;
    const gap = 20;

    // Инициализация блоков и цветов
    const blocksCount = Math.floor(width / (blockWidth + gap));
    blocksRef.current = Array.from(
      { length: blocksCount },
      (_, i) => i * (blockWidth + gap)
    );
    huesRef.current = Array.from(
      { length: blocksCount },
      (_, i) => (i * 30) % 360
    );

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < blocksRef.current.length; i++) {
        blocksRef.current[i] += directionRef.current * speed;

        // Обновление цвета
        huesRef.current[i] =
          (huesRef.current[i] + directionRef.current * 1.5 + 360) % 360;

        const x = blocksRef.current[i];
        const hue = huesRef.current[i];
        const color = `hsl(${hue}, 70%, 60%)`;

        ctx.fillStyle = color;
        ctx.fillRect(x, height / 2 - blockHeight / 2, blockWidth, blockHeight);
      }

      const lastBlockX = blocksRef.current[blocksRef.current.length - 1];
      const firstBlockX = blocksRef.current[0];

      if (lastBlockX + blockWidth >= width || firstBlockX <= 0) {
        directionRef.current *= -1;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} className="w-full h-52" />;
};

export default CanvasBlocks;
