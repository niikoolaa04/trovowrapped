import { BaseOptions } from "types/Base";
import { BaseChannel } from "types/Channel";
import { TrovoLiveEvent } from "./structures/events/TrovoEvent";
import { TrovoChannels } from "./structures/TrovoChannels";
import { TrovoCategories } from "./structures/TrovoCategories";

export class TrovoClient {
  #apiKey: string;
  #ready: boolean = false;
  #options: BaseOptions;

  private eventEmitter = TrovoLiveEvent.init();

  constructor(apiKey: string, options: BaseOptions = {
    checkInterval: 60,
    checkLive: false,
    liveChannels: []
  }) {
    this.#apiKey = apiKey;
    this.#ready = true;
    this.#options = options;

    if(this.#options.checkLive == true) 
      setInterval(() => this.liveNotification(), (this.#options?.checkInterval as number) * 1000);
  }

  get channels(): any {
    return new TrovoChannels(this.#apiKey, this.#options, this.eventEmitter)
  }
  
  get categories() {
    return new TrovoCategories(this.#apiKey);
  }

  get isReady(): boolean {
    return this.#ready;
  }

  get events() {
    return this.eventEmitter;
  }

  /**
   * Fires 'trovoLive' event when Channel(s) starts stream
   * 
   */
  private liveNotification() {
    if(this.#options.checkLive == true) {
      this.#options.liveChannels?.forEach(async(channel, index) => {
        console.log(channel)
        setTimeout(() => {
          this.channels.getChannelByName(channel).then(async(result: BaseChannel) => {
            console.log(result)
            if(result?.is_live == true)
              this.eventEmitter.emit("trovoLive", result);
          }).catch(console.log);
        }, 185 * index);
      })
    }
  }
}