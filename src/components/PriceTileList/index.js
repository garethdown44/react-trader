import React from 'react';
import GridLayout from './GridLayout';

const defaults = {
  minH: 5,
  maxH: 10,
  h: 6
};

// todo: drive this from redux

const gridProps = {
  layouts: {
    lg: [
      { ...defaults, i: 'EURUSD', x: 0, y: 0, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'EURGBP', x: 1, y: 0, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'AUDCHF', x: 2, y: 0, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'GBPCHF', x: 3, y: 0, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'AUDUSD', x: 4, y: 0, w: 1, h: 7, isResizable: false }
    ],
    md: [
      { ...defaults, i: 'EURUSD', x: 0, y: 0, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'EURGBP', x: 1, y: 0, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'AUDCHF', x: 2, y: 0, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'GBPCHF', x: 3, y: 0, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'AUDUSD', x: 0, y: 1, w: 1, h: 7, isResizable: false }
    ],
    sm: [
      { ...defaults, i: 'EURUSD', x: 0, y: 0, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'EURGBP', x: 1, y: 0, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'AUDCHF', x: 2, y: 0, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'GBPCHF', x: 1, y: 1, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'AUDUSD', x: 0, y: 1, w: 1, h: 7, isResizable: false }
    ],
    xs: [
      { ...defaults, i: 'EURUSD', x: 0, y: 0, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'EURGBP', x: 1, y: 0, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'AUDCHF', x: 2, y: 1, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'GBPCHF', x: 0, y: 2, w: 1, h: 7, isResizable: false },
      { ...defaults, i: 'AUDUSD', x: 0, y: 1, w: 1, h: 7, isResizable: false }
    ]
  },
  breakpoints: {
    lg: 1600, md: 1300, sm: 1000, xs: 600, xxs: 0
  },
  rowHeight: 28,
  cols: {
    lg: 5,
    md: 4,
    sm: 3,
    xs: 2,
    xxs: 1,
  }
};

export default createPriceTile => props => (
  <div style={{ backgroundColor: '#fff', height: '200%' }}>
    <GridLayout {...gridProps} {...props} createPriceTile={createPriceTile} />
  </div>
);
