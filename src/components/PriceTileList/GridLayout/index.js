/* eslint new-cap: "off" */

import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import styles from './styles.module.scss';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const propTypes = {
  layouts: PropTypes.object.isRequired,
  breakpoints: PropTypes.object.isRequired,
  rowHeight: PropTypes.number.isRequired,
  cols: PropTypes.object.isRequired,
  tiles: PropTypes.object.isRequired,
  createPriceTile: PropTypes.func.isRequired
};

const GridLayout = (props) => {
  const { layouts, breakpoints, rowHeight, cols, createPriceTile } = props;
  return (
    <ResponsiveReactGridLayout
      className={styles.container}
      layouts={layouts}
      breakpoints={breakpoints}
      rowHeight={rowHeight}
      draggableHandle=".drag-handle"
      cols={cols}
    >
      {layouts.lg.map((item, i) => {
        const PriceTile = createPriceTile();
        return (
          <div key={item.i} className={item.static ? 'static' : ''}>
            <PriceTile tileId={i} ccyCpl={item.i} {...props} {...props.tiles[i]} />
          </div>
        );
      })}
    </ResponsiveReactGridLayout>
  );
};

GridLayout.propTypes = propTypes;

export default GridLayout;
