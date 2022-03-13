import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

import GridLayout from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

const App = () => {
  const layout = [
    { i: '1', x: 0, y: 0, w: 1, h: 1 },
    { i: '2', x: 1, y: 0, w: 1, h: 1 },
    { i: '3', x: 2, y: 0, w: 1, h: 1 },
  ];
  const layouts = {
    lg: layout,
  };
  return (
    <ResponsiveGridLayout
      autoSize={false}
      className='layout'
      layouts={layouts}
      breakpoints={{ xxl: 1536, xl: 1280, lg: 1024, md: 768, sm: 640 }}
      cols={{ xxl: 5, xl: 3, lg: 3, md: 2, sm: 1 }}
    >
      <div key='1' style={{ background: 'red' }}>
        1
      </div>
      <div key='2' style={{ background: 'green' }}>
        2
      </div>
      <div key='3' style={{ background: 'blue' }}>
        3
      </div>
    </ResponsiveGridLayout>
  );
};

export default App;
