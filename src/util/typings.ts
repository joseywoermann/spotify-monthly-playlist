// responses
export interface SpotifyResponse {
    items?: Track[];
    total?: number;
    limit?: number;
    offset?: number;
    previous?: any;
    href?: string;
    next?: any;
    error?: Error;
}

export interface PlaylistResponse {
    collaborative?: boolean;
    description?: string;
    external_urls?: ExternalUrls;
    followers?: { href: undefined; total: number };
    href?: string;
    id?: string;
    images?: Image[];
    name?: string;
    owner?: SpotifyUser;
    primary_color?: string | undefined;
    public?: boolean;
    snapshot_id?: string;
    tracks?: {
        href: string;
        items: any[];
        limit: number;
        next: any;
        offset: number;
        previous: any;
        total: number;
    };
    type?: string;
    uri?: string;
    error?: Error;
}

export interface AddSongsResponse {
    snapshot_id?: string;
    error?: Error;
}

// end responses

export interface SpotifyUser {
    display_name: string;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
}

export interface Track {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url?: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface ExternalIds {
    isrc: string;
}

export interface Error {
    status: number;
    message: string;
}

// other stuff

export interface Settings {
    token: string;
    limit: number;
}

export type URI = string;
