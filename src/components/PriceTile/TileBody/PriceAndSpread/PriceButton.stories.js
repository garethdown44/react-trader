import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PriceButton from './PriceButton';

storiesOf('PriceButton', module)
    .add('normal', () => (
      <PriceButton
        isExecuting={false}
        execute={action('bookSpotTrade')}
        price={1.23456}
        notionalCurrency="EUR"
      />
    ))
    .add('executing', () => (
      <PriceButton
        isExecuting={false}
        execute={action('bookSpotTrade')}
        price={1.23456}
        notionalCurrency="EUR"
      />
    ));