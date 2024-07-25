import React from 'react';
import { ColorPicker } from 'antd';

const Demo = () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <ColorPicker defaultValue="#000000" /> 
    <ColorPicker defaultValue="#ffffff" /> 
    <ColorPicker defaultValue="#0000ff" /> 
  </div>
);

export default Demo;
