import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PriceTile from '.';

const WidthDecorator = (story) => (
  <div style={{ width: '400px' }}>
    {story()}
  </div>
);

storiesOf('PriceTile', module)
  .addDecorator(WidthDecorator)
  .add('6 digit price', () => (
    <PriceTile
      ccyCpl="EURUSD"
      price={{ bid: 1.23456, ask: 1.23567, isIncrease: true, spread: 1.11 }}
      tileId={0}
      notional={1000000}
      notionalCurrency="EUR"
      bookSpotTrade={action('bookSpotTrade')}
    />
    ))
    .add('5 digit price', () => (
      <PriceTile
        ccyCpl="EURUSD"
        price={{ bid: 1.2345, ask: 1.2356, isIncrease: true, spread: 1.11 }}
        tileId={0}
        notional={1000000}
        notionalCurrency="EUR"
        bookSpotTrade={action('bookSpotTrade')}
      />
    ))
    .add('decrease', () => (
      <PriceTile
        ccyCpl="EURUSD"
        price={{ bid: 1.2345, ask: 1.2356, isIncrease: false, spread: 1.11 }}
        tileId={0}
        notional={1000000}
        notionalCurrency="EUR"
        bookSpotTrade={action('bookSpotTrade')}
      />
    ))
    .add('executing', () => (
      <PriceTile
        ccyCpl="EURUSD"
        price={{ bid: 1.2345, ask: 1.2356, isIncrease: true, spread: 1.11 }}
        tileId={0}
        notional={1000000}
        notionalCurrency="EUR"
        isExecuting
        bookSpotTrade={action('bookSpotTrade')}
      />
    ))
    .add('invalid notional', () => (
      <PriceTile
        ccyCpl="EURUSD"
        price={{ bid: 1.2345, ask: 1.2356, isIncrease: true, spread: 1.11 }}
        tileId={0}
        isInvalidNotional
        notional={1000000}
        notionalCurrency="EUR"
        bookSpotTrade={action('bookSpotTrade')}
      />))
    .add('disconnected', () => (
      <PriceTile
        ccyCpl="EURUSD"
        price={{ bid: 1.2345, ask: 1.2356, isIncrease: true, spread: 1.11 }}
        tileId={0}
        isInvalidNotional
        notional={-19988}
        notionalCurrency="EUR"
        bookSpotTrade={action('bookSpotTrade')}
        isDisconnected
      />))
    .add('stale prices', () => (
      <PriceTile
        ccyCpl="EURUSD"
        price={{ bid: 1.2345, ask: 1.2356, isIncrease: true, spread: 1.11 }}
        tileId={0}
        notional={1000000}
        notionalCurrency="EUR"
        bookSpotTrade={action('bookSpotTrade')}
        isStale
      />
  ));