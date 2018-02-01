/*Implement a model class, where you can do things like:
model.set(key, value)
model.get(key)
model.subscribe(event, cb)

Examples:
model.set(‘favorite’, ‘blue’);
model.subscribe(‘change’, callback); // general changes for all data
model.subscribe(‘change:favorite’, cb); // specific changes for a key
*/


class EventEmitter {
  constructor () {
    this.events = {};
  }

  subscribe (eventName, handler) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(handler);
    return {
      unsubscribe: () => {
        let index = this.events[eventName].indexOf(handler);
        if (-1 !== index) {
          this.events[eventName].splice(index, 1);
        }
      }
    };
  }

  emit (eventName, ...payload) {
    var handlers = this.events[eventName];
    if (Array.isArray(handlers)) {
      handlers.forEach((handler) => {
        handler.apply(this, payload);
      });
    }
  }
}


class Model extends EventEmitter {
  constructor () {
    super();
    this.data = {};
  }

  set (key, value) {
    this.data[key] = value;
    this.emit('change', key, value);
    this.emit(`change:${key}`, value);
  }

  get (key) {
    return this.data[key];
  }
}



var model = new Model();
let subscriber = model.subscribe('change', (...args) => {console.log('on change', args);});
model.subscribe('change:favorite', (...args) => {console.log('favorite change', args);});
console.log("before unsubscribe ===================");
model.set('favorite', 'blue');
subscriber.unsubscribe();
console.log("after unsubscribe ===================");
model.set('favorite', 'blue');
console.log(model.get('favorite'));
