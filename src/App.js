import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

import GridLayout from 'react-grid-layout';

const App = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: false },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ];
  return (
    <GridLayout
      className='layout'
      layout={layout}
      cols={6}
      rowHeight={30}
      width={800}
    >
      <div key='a' style={{ backgroundColor: 'red' }}>
        a
      </div>
      <div key='b' style={{ backgroundColor: 'red' }}>
        b
      </div>
      <div key='c' style={{ backgroundColor: 'red' }}>
        c
      </div>
    </GridLayout>
  );
};

export default App;
