import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/users/1/posts';

  constructor(private http: HttpClient) {}

  getHeroes() {
    this.http.get(this.postsUrl).subscribe((response) => console.log(response))
    return HEROES;
  }
}
