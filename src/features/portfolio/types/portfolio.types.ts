export interface Post {
  id: string
  title: string
  category: string
  description: string
}

export interface Work {
  id: string
  title: string
  category: string
  description: string
  icon: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}
