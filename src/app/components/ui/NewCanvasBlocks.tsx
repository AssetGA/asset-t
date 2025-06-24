"use client";

import React, { useEffect, useRef } from "react";

const NewCanvasBlocks = (text: { name: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const word = text.name + " ";
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = 200);

    const blockWidth = 80;
    const blockHeight = 200;
    const gap = 20;
    const blocks: { x: number; y: number }[] = [];

    for (let x = 0; x < width; x += blockWidth + gap) {
      blocks.push({ x, y: height / 2 - blockHeight / 2 });
    }

    let lightX = 0;
    let direction = 1;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      lightX += direction * 5;
      if (lightX > width + 200) direction = -1;
      if (lightX < -200) direction = 1;

      // Draw background blue glow
      const gradient = ctx.createRadialGradient(
        lightX,
        height / 2,
        50,
        lightX,
        height / 2,
        300
      );
      gradient.addColorStop(0, "rgba(0, 100, 255, 0.4)");
      gradient.addColorStop(1, "rgba(0, 100, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(lightX, height / 2, 300, 0, Math.PI * 2);
      ctx.fill();

      // Draw transparent white blocks and letters from "Приветствую"
      blocks.forEach(({ x, y }, i) => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
        ctx.fillRect(x, y, blockWidth, blockHeight);

        const letter = word[i % word.length];
        ctx.fillStyle = "white";
        ctx.font = "bold 48px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(letter, x + blockWidth / 2, y + blockHeight / 2);
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [word]);

  return <canvas ref={canvasRef} className="w-full h-52 block" />;
};

export default NewCanvasBlocks;
