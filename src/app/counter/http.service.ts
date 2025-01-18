import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';

@Injectable({
    providedIn:  'root'
})
export class HttpService {
    private url = '';

    constructor(private http: HttpClient) { }

    getPosts() {
        return this.http.get(this.url);
    }
}