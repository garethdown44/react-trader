import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PriceAndSpread from '.';

const WidthDecorator = (story) => (
  <div style={{ width: '400px' }}>
    {story()}
  </div>
);

storiesOf('PriceAndSpread', module)
    .addDecorator(WidthDecorator)
    .add('normal, increase', () => (
      <PriceAndSpread
        ccyCpl="EURUSD"
        execute={action('bookSpotTrade')}
        executing={false}
        price={{ bid: 1.23456, ask: 1.23567, isIncrease: true, spread: 1.11 }}
      />
    ))
    .add('normal, decrease', () => (
      <PriceAndSpread
        ccyCpl="EURUSD"
        execute={action('bookSpotTrade')}
        executing={false}
        price={{ bid: 1.23456, ask: 1.23567, isIncrease: false, spread: 1.11 }}
      />
    ));