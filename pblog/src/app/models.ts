export interface SoundList {
    list: SoundCategory[]
}

export interface SoundCategory {
    name: string
    sounds: string[]
}

export interface Articles {
    articles: Article[]
}

export interface Article {
    id: string
    date: string
    language: string
    title: string
}
