export type Pages = Array<{
  id: number
  href: string
  text: string
}>

export type Pictures = Array<{
  id: string
  slug: string
  created_at: string
  updated_at: string
  promoted_at?: null
  width: number
  height: number
  color: string
  blur_hash: string
  description?: null
  alt_description: string
  breadcrumbs?: (null)[] | null
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
    small_s3: string
  }
  links: {
    self: string
    html: string
    download: string
    download_location: string
  }
  likes: number
  liked_by_user: boolean
  current_user_collections?: (null)[] | null
  sponsorship?: null
}>
