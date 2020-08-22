import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseApiService<T> {
  baseUrl = 'https://my-apis-401f1.web.app';
  //baseUrl = 'http://localhost:5000';
   
  constructor(protected httpClient: HttpClient) { }

  getList(resourceUrl): Observable<T[]> {
    const to = `${this.baseUrl}/api/${resourceUrl}`;

    console.log(`GET LIST: ${to}`);
    return this.httpClient.get<T[]>(`${to}`);
  }

  get(resourceUrl): Observable<T> {
    const to = `${this.baseUrl}/api/${resourceUrl}`;

    console.log(`GET: ${to}`);
    return this.httpClient.get<T>(`${to}`);
  }

  count(resourceUrl): Observable<T> {
    const to = `${this.baseUrl}/api/${resourceUrl}`;

    console.log(`GET: ${to}`);
    return this.httpClient.get<T>(`${to}`);
  }

  
  post(params, resourceUrl): Observable<T> {
    const to = `${this.baseUrl}/api/${resourceUrl}`;
    alert(to)
    console.log(`POST: ${to}`);
    return this.httpClient.post<T>(`${to}`, params);
  }
}
