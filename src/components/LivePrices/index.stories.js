import React from 'react';
import { storiesOf } from '@kadira/storybook'; // eslint-disable-line import/no-extraneous-dependencies
import LivePrices from './index';

storiesOf('LivePrices', module)
    .add('default', () => (
      <LivePrices />
    ));
