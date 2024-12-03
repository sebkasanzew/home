"use client";

import React, { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

const CircleColorPicker: React.FC = () => {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <HexColorPicker
        color={color}
        onChange={setColor}
        style={{ width: "200px", height: "200px" }}
      />
      <p
        className="mt-4 text-xl font-semibold"
        style={{ color: getContrastColor(color) }}
      >
        Selected Color: {color}
      </p>
    </div>
  );
};

// Helper function to determine text color based on background
function getContrastColor(hexColor: string): string {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#000000" : "#ffffff";
}

export default CircleColorPicker;
