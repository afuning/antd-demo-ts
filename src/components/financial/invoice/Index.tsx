import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

const Invoice: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`)
  }, [count]);

  return (
    <div className="invoice">
      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)}>点击</Button>
    </div>
  );
}


export default Invoice;