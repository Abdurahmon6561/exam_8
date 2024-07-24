import React from 'react';
import { Segmented } from 'antd';
import "../../globals.css"; 


const Demo: React.FC = () => (
  <div className='p-2'>
    <Segmented<string>
    options={['L', 'XL', 'XS']}
    className="custom-segmented"
    onChange={(value) => {
      console.log(value); 
    }}
  />
  </div>
);

export default Demo;
