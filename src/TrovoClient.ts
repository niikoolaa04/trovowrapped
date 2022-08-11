export class TrovoClient {
  #apiKey: string;
  #ready: boolean = false;

  constructor(apiKey: string, options: object = {}) {
    this.#apiKey = apiKey;
    this.#ready = true;
  }

  get key(): string {
    return this.#apiKey;
  }

  get isReady(): boolean {
    return this.#ready;
  }
}