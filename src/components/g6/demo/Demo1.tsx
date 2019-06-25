import React, { useEffect } from 'react';
import G6 from '@antv/g6';

function G6Demo1 () {
  useEffect(() => {
    const data = {
      nodes: [{
        id: 'node1',
        x: 100,
        y: 200
     },{
        id: 'node2',
        x: 300,
        y: 200
     }],
      edges: [{
        source: 'node1',
        target: 'node2'
     }]
    };
    const graph = new G6.Graph({
      container: 'g6-demo1',
      width: 500,
      height: 500
    });
    graph.data(data);
    graph.render();
    return function cleanup () {
      graph.destroy();
    }
  });
  return (
    <div className="g6-demo1" id="g6-demo1"></div>
  )
}

export default G6Demo1;