import { Observable } from 'rxjs';
import { publish, filter, refCount } from 'rxjs/operators';
import io from 'socket.io-client';
import config from '../config';

let stream;

export default ccyCpl => {
  if (!stream) {
    const socket = io.connect(config.serverUrl, {
      path: config.serverWSPath
    });

    stream = Observable.create(obs => {
      socket.on('tick', (tick) => {
        obs.next({
          bid: Number(tick.bid),
          ask: Number(tick.ask),
          ccyCpl: tick.ccyCpl
        });
      });
    });

    stream = stream.pipe(publish(), refCount());
  }

  return stream.pipe(filter(x => x.ccyCpl === ccyCpl));
};