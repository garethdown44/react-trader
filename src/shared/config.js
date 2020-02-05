const config = {};

const isDevelopment = () =>
  window.location.hostname === '' || window.location.hostname === 'localhost';

config.serverUrl = isDevelopment() ? 'http://localhost:8081' : 'https://trader-server.herokuapp.com';
config.serverPath = '';
config.serverWSPath = '';

export default config;
