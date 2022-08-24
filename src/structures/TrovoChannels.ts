import { BaseOptions } from "types/Base";
import { BaseChannel } from "types/Channel";
import { Users } from "types/User";
import { TrovoLiveEvent } from "./events/TrovoEvent";
import Trovo from "./Trovo";

export class TrovoChannels extends Trovo {
  #apiKey: string;
  #eventEmitter: TrovoLiveEvent;
  #options: BaseOptions

  constructor(apiKey: string, options: BaseOptions, eventEmitter: any) {
    super();
    this.#apiKey = apiKey;
    this.#eventEmitter = eventEmitter;
    this.#options = options;
  };

  /**
   * Get all information about Channel from Channel Name/Username
   * 
   * @param {string} username - Channel Name/Username
   * @returns {BaseChannel} Channel Data
   */
  public getChannelByName(username: string) {
    if(typeof username != "string")
      throw new TypeError(`Expected 'username' to be of type 'string', instead received '${typeof username}'.`);
    return this.axiosClient().post("/channels/id", {
      username
    }, {
      headers: {
        "Client-ID": this.#apiKey
      }
    }).then((res): BaseChannel => res.data);
  }

  /**
   * Get all information about Channel from Channel ID
   * 
   * @param {number} id - Channel ID
   * @returns {BaseChannel} Channel Data
   */
  public getChannelById(id: number) {
    if(typeof id != "number")
      throw new TypeError(`Expected 'id' to be of type 'number', instead received '${typeof id}'.`);
    return this.axiosClient().post("/channels/id", {
      channel_id: id
    }, {
      headers: {
        "Client-ID": this.#apiKey
      }
    }).then((res): BaseChannel => res.data);
  }

  /**
   * Get Channel ID from Channel Name/Username
   * 
   * @param {string} username - Channel Name/Username
   * @returns {number} Channel ID
   */
  public getChannelId(username: string) {
    if(typeof username != "string")
      throw new TypeError(`Expected 'id' to be of type 'number', instead received '${typeof username}'.`);
    return this.axiosClient().post("/getusers", {
      user: [username]
    }, {
      headers: {
        "Client-ID": this.#apiKey
      }
    }).then((res): string => {
      if(res.data.total == 0) return "0";
      return res.data.users?.[0].channel_id;
    });
  }

  /**
   * Get List of Channels from List of Usernames
   * 
   * @param {string[]} usernames - List of Usernames
   * @returns {Users[]} List of Channels
   */
  public getChannels(usernames: String[]) {
    if(!Array.isArray(usernames))
      throw new TypeError(`Expected 'usernames' to be of type 'array', instead received '${typeof usernames}'.`);
    if(usernames.length > 0 && !usernames.every((e) => typeof e == "string"))
      throw new TypeError(`Expected 'usernames' Array to include elements of type 'string', but it doesn't.`);
    
    return this.axiosClient().post("/getusers", {
      user: usernames
    }, {
      headers: {
        "Client-ID": this.#apiKey
      }
    }).then((res): Users => res.data);
  }

  /**
   * Get Channel Name/Username from Channel ID
   * 
   * @param {number} id - Channel ID
   * @returns {string} Channel Name/Username
   */
  public getUsername(id: number) {
    return this.getChannelById(id).then((res: BaseChannel): string => res.username)
  }

  /**
   * Get User's Profile Image
   * 
   * @param {string[]} username - Channel Name/Username
   * @returns {string} Channel Profile Image
   */
  public getProfileImage(username: string) {
    return this.getChannelByName(username).then((res: BaseChannel): string => res.profile_pic);
  }

  /**
   * Get whether User is Live
   * 
   * @param {string} username - Channel Name/Username
   * @returns {boolean} true if is live, otherwise false
   */
  public isLive(username: string) {
    return this.getChannelByName(username).then((res: BaseChannel): boolean => res.is_live)
  }

  /**
   * Get Number of Followers
   * 
   * @param {string} username - Channel Name/Username
   * @returns {number} Follower's Count
   */
  public getFollowerCount(username: string) {
    return this.getChannelByName(username).then((res: BaseChannel): number => res.followers)
  }

  /**
   * Get Number of Subscribers
   * 
   * @param {string} username - Channel Name/Username
   * @returns {number} Subscribers's Count
   */
  public getSubscriberCount(username: string) {
    return this.getChannelByName(username).then((res: BaseChannel): number => res.subscriber_num)
  }
}