export interface LyricsResult {
    type: string;
    art: Art;
    mus: Mus[];
    badwords: boolean;
}

export interface Mus {
    id: string;
    name: string;
    url: string;
    lang: number;
    text: string;
}

export interface Art {
    id: string;
    name: string;
    url: string;
}
