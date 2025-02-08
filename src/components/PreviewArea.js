import React from 'react';
import styled, { keyframes } from 'styled-components';

const generateGradientAnimation = (colors, randomness) => keyframes`
  0% {
    background-position: ${0 + Math.random() * randomness}% ${50 + Math.random() * randomness}%;
  }
  50% {
    background-position: ${100 + Math.random() * randomness}% ${50 + Math.random() * randomness}%;
  }
  100% {
    background-position: ${0 + Math.random() * randomness}% ${50 + Math.random() * randomness}%;
  }
`;

const PreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(45deg, ${props => 
    props.colors.map(c => `${c.color} ${c.position}%`).join(', ')
  });
  background-size: 400% 400%;
  animation: ${props => generateGradientAnimation(props.colors, props.randomness)} ${props => props.speed}s ease infinite;
  filter: blur(${props => props.blur}px);
`;

function PreviewArea({ config }) {
  return <PreviewContainer {...config} />;
}

export default PreviewArea;