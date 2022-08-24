import { EventEmitter } from 'events'

export class TrovoLiveEvent {
  private eventHandler: EventEmitter;

  constructor(eventHandler: EventEmitter) {
    this.eventHandler = eventHandler;
  }

  /**
   * Initialize Trovo Events
   * 
   * @returns {any}
   */
  static init() {
    return new TrovoLiveEvent(new EventEmitter);
  }

  /**
   * Emit an Event to Client
   * 
   * @param {string} eventName - Name of Event to Emit
   * @param {any[]} args - Event args
   * @returns {void}
   */
  emit(eventName: string, ...args: any[]) {
    return this.eventHandler.emit(eventName, ...args);
  }

  /**
   * Subscribe to Events and run function upon receiving them
   * 
   * @param {string} eventName - Name of Event to which to Listen
   * @param {(...args: any[]) => void)} callback - Function to run upon receiving Event
   * @returns {void}
   */
  subscribe(eventName: string, callback: (...args: any[]) => void) {
    this.eventHandler.on(eventName, callback);
  }
}