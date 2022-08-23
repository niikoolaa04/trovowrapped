import { EventEmitter } from 'events'

export class TrovoLiveEvent {
  private eventHandler: EventEmitter;

  constructor(eventHandler: EventEmitter) {
    this.eventHandler = eventHandler;
  }

  static init() {
    return new TrovoLiveEvent(new EventEmitter);
  }

  emit(eventName: string, ...args: any[]) {
    return this.eventHandler.emit(eventName, ...args);
  }

  subscribe(eventName: string, callback: (...args: any[]) => void) {
    this.eventHandler.on(eventName, callback);
  }

}