import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(`/posts`);
  }

  getComments(): Observable<any> {
    return this.http.get<any>(`/comments`);
  }

  getAlbums(): Observable<any> {
    return this.http.get<any>(`/albums`);
  }

  getPhotos(): Observable<any> {
    return this.http.get<any>(`/photos`);
  }

  getTodos(): Observable<any> {
    return this.http.get<any>(`/todos`);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`/users`);
  }
}
