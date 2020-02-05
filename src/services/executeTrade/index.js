import axios from 'axios';
import config from '../config';
const url = `${config.serverUrl}${config.serverPath}/trades/execute`;

export default async (action, ccyCpl, rate, notional, success, error) => {
  let payload = {
    action,
    ccyCpl,
    rate,
    notional
  };

  payload = JSON.stringify(payload);
  
  try {
    await axios({
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