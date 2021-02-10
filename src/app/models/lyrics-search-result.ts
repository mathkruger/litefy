export interface LyricsSearchResult {
    response: Response;
}

export interface Response {
    numFound: number;
    start: number;
    docs: Doc[];
}

export interface Doc {
    id: string;
    url: string;
    title: string;
    band: string;
}
