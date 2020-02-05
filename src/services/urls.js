import config from './config';

export default {
  up: () => `${config.serverUrl}/up`,
  executeTrade: () => `${config.serverUrl}/trades/execute`
}