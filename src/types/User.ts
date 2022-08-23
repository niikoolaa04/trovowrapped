export interface Users {
  total: number,
  users: BaseUser[]
}

export interface BaseUser {
  user_id: string,
  username: string,
  nickname: string,
  channel_id: string
}