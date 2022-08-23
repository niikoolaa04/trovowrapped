import { BaseChannel } from "types/Channel";
import { Users } from "types/User";
import Trovo from "./Trovo";

export class TrovoChannels extends Trovo {
  #apiKey: string;
  constructor(apiKey: string) {
    super();
    this.#apiKey = apiKey;
  };

  /**
   * Get all information about Channel from Channel Name/Username
   * 
   * @param {string} username - Channel Name/Username
   * @return {BaseChannel} Channel Data
   */
  public getChannelByName(username: string) {
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
   * @return {BaseChannel} Channel Data
   */
  public getChannelById(id: number) {
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
   * @return {number} Channel ID
   */
  public getChannelID(username: string) {
    return this.axiosClient().post("/getusers", {
      user: [username]
    }, {
      headers: {
        "Client-ID": this.#apiKey
      }
    }).then((res): string => {
      if(res.data.total == 0) return "0";
      return res.data[0].channel_id;
    });
  }

  /**
   * Get List of Channels from List of Usernames
   * 
   * @param {string[]} usernames - List of Usernames
   * @return {Users[]} List of Channels
   */
  public getChannels(usernames: String[]) {
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
   * @return {string} Channel Name/Username
   */
  public getUsername(id: number) {
    return this.getChannelById(id).then((res): string => res.username)
  }

  /**
   * Get User's Profile Image
   * 
   * @param {string[]} username - Channel Name/Username
   * @return {string} Channel Profile Image
   */
  public getProfileImage(username: string) {
    return this.getChannelByName(username).then((res): string => res.profile_pic);
  }

  /**
   * Get Amount of Subscribers
   * 
   * @param {string} username - Channel Name/Username
   * @return {number} Number of Subscribers
   */
  public getSubscriberCount(username: string) {
    return this.getChannelByName(username).then((res): string => res.profile_pic);
  }

  /**
   * Get whether User is Live
   * 
   * @param {string} username - Channel Name/Username
   * @return {boolean} true if is live, otherwise false
   */
  public isLive(username: string) {
    return this.getChannelByName(username).then((res): boolean => res.is_live)
  }
}