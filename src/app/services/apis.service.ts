import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  private quotesApiKey: string = 'paEHkhl474jtY9YYMJx82w==iRRC7qqaSV2JzfMK';
  private quotesUrl: string = 'https://api.api-ninjas.com/v1/quotes';
  constructor(private http: HttpClient) {}

  public getQuotes() {
    return this.http.get(`https://api.quotable.io/random`);
  }
}
