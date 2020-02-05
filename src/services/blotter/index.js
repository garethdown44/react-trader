import io from 'socket.io-client';
import { Observable } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';
import config from '../config';

const socket = io.connect(config.serverUrl, {
  path: config.serverWSPath
});

export default Observable.create(obs => {
  socket.on('position', (position) => {
    obs.next(position);
  });
}).pipe(publish(), refCount());