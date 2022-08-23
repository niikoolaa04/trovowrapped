import axios from 'axios';

export default class Trovo {
  private BASE_URL: string = "https://open-api.trovo.live/openplatform";

  /**
   * Create Base Call
   * 
   * @return {AxiosInstance}
   */
  public axiosClient() {
    return axios.create({
      baseURL: this.BASE_URL,
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}