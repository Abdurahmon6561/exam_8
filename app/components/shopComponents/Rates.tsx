import React, { useState } from 'react';
import { Flex, Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rates: React.FC = () => {
  const [value, setValue] = useState(3);
  return (
   <div className='p-2'>
     <Flex gap="middle" vertical>
      <Rate tooltips={desc} onChange={setValue} value={value} />
    </Flex>
   </div>
  );
};

export default Rates;