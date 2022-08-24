import { BaseOptions } from "types/Base";
import { TrovoLiveEvent } from "./structures/events/TrovoEvent";
import { TrovoChannels } from "./structures/TrovoChannels";

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
      setInterval(() => this.handleLive(), (this.#options?.checkInterval as number) * 1000);
  }

  get channels(): any {
    return new TrovoChannels(this.#apiKey, this.#options, this.eventEmitter)
  }

  get isReady(): boolean {
    return this.#ready;
  }

  get events() {
    return this.eventEmitter;
  }

  /**
   * Send notification on Channel lIVE
   * 
   * @param {string} username - Channel Name/Username
   * @return {boolean} true if is live, otherwise false
   */
  private handleLive() {
    if(this.#options.checkLive == true) {
      this.#options.liveChannels?.forEach(async(channel, index) => {
        setTimeout(() => {
          this.channels.getChannelByName(channel).then(async(result: any) => {
            if(result?.is_live == true)
              this.eventEmitter.emit("trovoLive", result);
          });
        }, 185 * index);
      })
    }
  }
}