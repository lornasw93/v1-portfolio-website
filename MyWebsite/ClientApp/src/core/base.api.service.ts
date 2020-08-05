import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseApiService<T> {
  baseUrl = 'https://my-apis-401f1.web.app';

  abstract resourceUrl: string;

  constructor(protected httpClient: HttpClient) { }

  getList(): Observable<T[]> {
    const to = `${this.baseUrl}/${this.resourceUrl}`;

    console.log(`GET LIST: ${to}`);
    return this.httpClient.get<T[]>(`${to}`);
  }

  get(url): Observable<T> {
    const to = `${this.baseUrl}/${this.resourceUrl}?${url}`;

    console.log(`GET: ${to}`);
    return this.httpClient.get<T>(`${to}`);
  }

  count(url): Observable<T> {
    const to = `${this.baseUrl}/${this.resourceUrl}?${url}`;

    console.log(`COUNT: ${to}`);
    return this.httpClient.get<T>(`${to}`);
  }

  post(params): Observable<T> {
    const to = `${this.baseUrl}/${this.resourceUrl}`;

    console.log(`POST: ${to}`);
    return this.httpClient.post<T>(`${to}`, params);
  }
}
