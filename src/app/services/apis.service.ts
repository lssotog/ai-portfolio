import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  constructor(private http: HttpClient) {}

  public getQuotes() {
    return this.http.get(`https://api.quotable.io/random`);
  }
}
