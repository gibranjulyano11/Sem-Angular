import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Igifts } from '../interfaces/igifts';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {
  autor_id: number = 2002;
  urlBase: string = 'https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws';

  constructor(private readonly http: HttpClient) {}

  getGifts() {
    let params = new HttpParams();
    params = params.append('author_id', this.autor_id);
    return this.http.get(this.urlBase, { params: params });

    }

  createGifts(gifts: Igifts) {
    return this.http.post('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws', gifts);
  }

  deleteGifts(gifts: Igifts) {
    return this.http.delete(this.urlBase, { body: gifts });
  }

}
