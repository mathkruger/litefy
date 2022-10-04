import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { delay, map } from "rxjs/operators";
import { YoutubePlayerService } from "./youtube-player.service";
import { from } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class YoutubeService {
    constructor(
        private http: HttpClient,
        private playerService: YoutubePlayerService
    ) {}

    getVideoFromApi(artist: string, trackName: string): Observable<any> {
        const key = environment.youtube_api_key;
        return this.http
            .get<any>(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10&maxResults=1&q=${artist} - ${trackName}&type=video&key=${key}`
            )
            .pipe(
                map((item) => {
                    const videoId = item.items[0].id.videoId;
                    return videoId;
                })
            );
    }

    getVideo(artist: string, trackName: string) {
        const searchLink = `https://html.duckduckgo.com/html/?q=${artist} - ${trackName} site:youtube.com`;

        return this.http
            .get<any>(
                `https://api.allorigins.win/get?url=${encodeURIComponent(
                    searchLink
                )}`
            )
            .pipe(
                map((item) => {
                    const text = item.contents;
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(text, "text/html");
                    const resultArray = Array.from(
                        doc.querySelectorAll(".links_main")
                    );

                    if (resultArray?.length > 1) {
                        let videoId = decodeURIComponent(
                            resultArray[0]
                                .querySelector(".result__snippet")
                                .getAttribute("href")
                        ).split("?v=")[1];

                        if (videoId.includes("&")) {
                            videoId = videoId.split("&")[0];
                        }

                        return videoId;
                    }
                })
            );
    }
}
