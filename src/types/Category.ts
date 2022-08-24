export interface Categories {
  category_info: BaseCategory[]
}

export interface BaseCategory {
  id: string,
  name: string,
  short_name: string,
  icon_url: string,
  desc: string,
}