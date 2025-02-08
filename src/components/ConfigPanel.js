import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-weight: 500;
  color: #1d1d1f;
  font-size: 14px;
`;

const ColorList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
`;

const ColorInput = styled.input`
  width: 56px;
  height: 56px;
  padding: 0;
  border: 2px solid #f5f5f7;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const RangeInput = styled.input`
  width: 100%;
  margin: 10px 0 24px;
  -webkit-appearance: none;
  height: 4px;
  background: #f5f5f7;
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: #000000;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
  }
`;

const ColorContainer = styled.div`
  margin-bottom: 16px;
`;

const ColorHeader = styled.div`
  margin-bottom: 8px;
`;

const ColorPositionSlider = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: 4px;
  background: #f5f5f7;
  border-radius: 2px;
  outline: none;
  margin-top: 8px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background: ${props => props.color};
    border: 2px solid white;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: all 0.2s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
  }
`;

function ConfigPanel({ config, onConfigChange }) {
  const handleColorChange = (index, newColor) => {
    const newColors = [...config.colors];
    newColors[index] = { ...newColors[index], color: newColor };
    onConfigChange({ ...config, colors: newColors });
  };

  const handlePositionChange = (index, position) => {
    const newColors = [...config.colors];
    newColors[index] = { ...newColors[index], position: Math.min(100, Math.max(0, position)) };
    onConfigChange({ ...config, colors: newColors });
  };

  return (
    <Panel>
      <div>
        <Label>渐变颜色</Label>
        {config.colors.slice(0, 4).map((colorObj, index) => (
          <ColorContainer key={index}>
            <ColorHeader>
              <ColorInput
                type="color"
                value={colorObj.color}
                onChange={(e) => handleColorChange(index, e.target.value)}
              />
            </ColorHeader>
            <ColorPositionSlider
              type="range"
              min="0"
              max="100"
              value={colorObj.position}
              color={colorObj.color}
              onChange={(e) => handlePositionChange(index, parseInt(e.target.value))}
            />
          </ColorContainer>
        ))}
      </div>

      <div>
        <Label>动画速度 ({config.speed}s)</Label>
        <RangeInput
          type="range"
          min="1"
          max="20"
          value={config.speed}
          onChange={(e) => onConfigChange({ ...config, speed: Number(e.target.value) })}
        />
      </div>

      <div>
        <Label>模糊效果 ({config.blur}px)</Label>
        <RangeInput
          type="range"
          min="0"
          max="200"
          value={config.blur}
          onChange={(e) => onConfigChange({ ...config, blur: Number(e.target.value) })}
        />
      </div>

      <div>
        <Label>动画随机程度 ({config.randomness}%)</Label>
        <RangeInput
          type="range"
          min="0"
          max="100"
          value={config.randomness}
          onChange={(e) => onConfigChange({ ...config, randomness: Number(e.target.value) })}
        />
      </div>
    </Panel>
  );
}

export default ConfigPanel;