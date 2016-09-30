import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _secondary = {
  key: defaultValue
};

class SecondaryStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_SECONDARY':
          _secondary = action.payload.secondaryData
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
      secondary: _secondary
    }
  }
}

export default new SecondaryStore();
