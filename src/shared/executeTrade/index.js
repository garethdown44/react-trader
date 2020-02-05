import debug from 'debug';
// import * as $ from 'jquery';
import axios from 'axios';
import config from '../config';

const debugApp = debug('trader:server:executeTrade');
const url = `${config.serverUrl}${config.serverPath}/trades/execute`;

export default async (action, ccyCpl, rate, notional, success, error) => {
  let payload = {
    action,
    ccyCpl,
    rate,
    notional
  };

  payload = JSON.stringify(payload);

  const successWrapper = () => {
    debugApp('success');
    success();
  };

  const errorWrapper = (xhr, status) => {
    debugApp('error');
    debugApp(xhr);
    debugApp(status);
    error();
  };

  debugApp('POST:', url, payload);

  // $.ajax({
  //   type: 'POST',
  //   url,
  //   data: payload,
  //   success: successWrapper,
  //   error: errorWrapper,
  //   contentType: 'application/json'
  // });

  try {
    const result = await axios({
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      url,
      data: payload,
      json: true
    });

    success();    
  } catch (e) {
    error();
  }  
};