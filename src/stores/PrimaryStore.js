import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _primary = {
  key: defaultValue
};

class PrimaryStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_PRIMARY':
          _primary = action.payload.primaryData
          this.emit('CHANGE')
          break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return {
      primary: _primary
    }
  }
}

export default new PrimaryStore();
