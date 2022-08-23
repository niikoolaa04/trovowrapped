import { TrovoLiveEvent } from "./structures/events/TrovoLiveEvent";
import { TrovoChannels } from "./structures/TrovoChannels";

export class TrovoClient {
  #apiKey: string;
  #ready: boolean = false;

  private eventEmitter = TrovoLiveEvent.init();

  constructor(apiKey: string, options: object = {}) {
    this.#apiKey = apiKey;
    this.#ready = true;
  }

  get key(): string {
    return this.#apiKey;
  }

  get channels(): any {
    return new TrovoChannels(this.#apiKey, this.eventEmitter)
  }

  get isReady(): boolean {
    return this.#ready;
  }

  get events() {
    return this.eventEmitter;
  }
}