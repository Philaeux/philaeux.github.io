export interface SoundList {
    list: SoundCategory[]
}

export interface SoundCategory {
    name: string
    sounds: string[]
}

export interface CheatSheet {
    id: string
    title: string
}

export interface Article {
    id: string
    date: string
    language: string
    title: string
}
