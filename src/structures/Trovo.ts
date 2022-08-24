import axios from 'axios';

export default class Trovo {
  /**
   * Base URL for API Calls
   */
  private BASE_URL: string = "https://open-api.trovo.live/openplatform";

  /**
   * Create Axios Instance
   * 
   * @returns {AxiosInstance}
   */
  public axiosClient() {
    return axios.create({
      baseURL: this.BASE_URL,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}