export interface Resume {
  basics: Basics
  skills: Skill[]
  work: Work[]
  education: Education[]
  certificates: Certificate[]
  languages: Language[]
}

export interface Basics {
  name: string
  label: string
  summary: string
  url: string
  image: string
  email: string
  location: Location
  profiles: Profile[]
}

export interface Location {
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

export interface Profile {
  network: string
  username: string
  url: string
}

export interface Skill {
  keywords: Keyword[]
  level?: string
  name: string
}

export interface Keyword {
  name: string
  wakatime?: string
  group?: number
}

export interface Work {
  name: string
  position: string
  url: string
  location: string
  startDate: string
  endDate: string
  summary: string
  highlights: string[]
  skills: string[]
}

export interface Education {
  institution: string
  studyType: string
  startDate: string
  endDate: string
  score: string
  description: string
  area?: string
}

export interface Certificate {
  name: string
  date: string
  issuer: string
  url: string
  summary: string
  highlights: string[]
}

export interface Language {
  language: string
  fluency: string
}
