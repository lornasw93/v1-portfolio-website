import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseApiService<T> {
  baseUrl = 'http://localhost:5000';
  //baseUrl = 'https://lornasw93-my-apis.herokuapp.com';

  constructor(protected client: HttpClient) { }

  getList(resourceUrl): Observable<T[]> {
    console.log(`${this.baseUrl}/api/${resourceUrl}`);

    return this.client.get<T[]>(`${this.baseUrl}/api/${resourceUrl}`);
  }

  get(resourceUrl): Observable<T> {
    return this.client.get<T>(`${this.baseUrl}/api/${resourceUrl}`);
  }

  count(resourceUrl): Observable<T> {
    return this.client.get<T>(`${this.baseUrl}/api/${resourceUrl}`);
  }

  post(params, resourceUrl): Observable<T> {
    return this.client.post<T>(`${this.baseUrl}/api/${resourceUrl}`, params);
  }
}
