export interface BaseChannel {
  is_live: boolean,
  category_id: number,
  category_name: string,
  live_title: string,
  audi_type: string,
  language_code: string,
  thumbnail: string,
  current_viewers: number,
  followers: number,
  streamer_info: string,
  profile_pic: string,
  channel_url: string,
  created_at: string,
  subscriber_num: number,
  username: string,
  social_links: Links[],
  started_at: string,
  ended_at: string,
  status?: number,
  error?: string,
  message?: string
}

interface Links {
  type: string,
  url: string
}