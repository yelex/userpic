import React from 'react';
import '../index.css';
import ColoredUserpic from './ColoredUserpic';

import avatar from './avatar.png';

function App() {

  return (
    <ColoredUserpic 
      src={ avatar }
      size={150}
      margin={4}
      backgroundColor='red'
      colors={['green', 'blue']}
      hoverColors={['blue', 'green']}
      colorWidth={6}
    />
  );
}

export default App;
