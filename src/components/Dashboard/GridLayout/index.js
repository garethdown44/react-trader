/* eslint new-cap: "off" */

import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styles from './styles.module.scss';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const propTypes = {
  layouts: PropTypes.object.isRequired,
  breakpoints: PropTypes.object.isRequired,
  rowHeight: PropTypes.number.isRequired,
  cols: PropTypes.object.isRequired
};

const generateLayouts = (layouts) => (
  layouts.lg.map((item) => (
    <div key={item.i} className={item.static ? 'static' : ''}>
      { item.cmp || <span className="text">{item.i}</span> }
    </div>
  ))
);

const GridLayout = ({ layouts, breakpoints, rowHeight, cols }) => (
  <ResponsiveReactGridLayout
    className={styles.container}
    layouts={layouts}
    breakpoints={breakpoints}
    rowHeight={rowHeight}
    cols={cols}
  >
    { generateLayouts(layouts) }
  </ResponsiveReactGridLayout>
);

GridLayout.propTypes = propTypes;

export default GridLayout;
