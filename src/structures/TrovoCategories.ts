import { BaseCategory, Categories } from "types/Category";
import Trovo from "./Trovo";

export class TrovoCategories extends Trovo {
  #apiKey: string;
  constructor(apiKey: string) {
    super();
    this.#apiKey = apiKey;
  }

  /**
   * Get list of Trovo Game Categories
   * 
   * @returns {Categories} List of Game Categories
   */
   public getAllCategories() {
    return this.axiosClient().get("/channels/id", {
      headers: {
        "Client-ID": this.#apiKey
      }
    }).then((res): Categories => res.data);
  }

  /**
   * Search list of Game Categories
   * 
   * @returns {Categories} List of Game Categories matching Query
   */
   public searchCategories(query: string, limit: number = 70) {
    if(typeof query != "string")
      throw new TypeError(`Expected 'query' to be of type 'string', instead received '${typeof query}'.`);
    if(typeof limit != "number")
      throw new TypeError(`Expected 'limit' to be of type 'string', instead received '${typeof limit}'.`);
    return this.axiosClient().post("/channels/id", {
      query,
      limit
    }, {
      headers: {
        "Client-ID": this.#apiKey
      }
    }).then((res): Categories => res.data);
  }
}