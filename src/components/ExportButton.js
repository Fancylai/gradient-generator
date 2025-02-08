import React from 'react';
import styled from 'styled-components';
import { saveAs } from 'file-saver';

const Button = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: #333333;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

function ExportButton({ config }) {
  // 在 generateCode 函数中更新代码生成逻辑
  const generateCode = () => {
    return `
.gradient-background {
  background: linear-gradient(45deg, ${config.colors.map(c => `${c.color} ${c.position}%`).join(', ')});
  background-size: 400% 400%;
  animation: gradient ${config.speed}s ease infinite;
  filter: blur(${config.blur}px);
}

@keyframes gradient {
  0% {
    background-position: ${0 + Math.random() * config.randomness}% ${50 + Math.random() * config.randomness}%;
  }
  50% {
    background-position: ${100 + Math.random() * config.randomness}% ${50 + Math.random() * config.randomness}%;
  }
  100% {
    background-position: ${0 + Math.random() * config.randomness}% ${50 + Math.random() * config.randomness}%;
  }
}
  `.trim();
};

  const handleExport = () => {
    const code = generateCode();
    const blob = new Blob([code], { type: 'text/css' });
    saveAs(blob, 'gradient.css');
  };

  return <Button onClick={handleExport}>导出 CSS</Button>;
}

export default ExportButton;