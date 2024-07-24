import React from 'react';
import { ColorPicker } from 'antd';

const Demo = () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <ColorPicker defaultValue="#000000" /> {/* Black */}
    <ColorPicker defaultValue="#ffffff" /> {/* White */}
    <ColorPicker defaultValue="#0000ff" /> {/* Blue */}
  </div>
);

export default Demo;
