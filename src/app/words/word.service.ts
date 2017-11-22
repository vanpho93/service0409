import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class WordService {
    constructor(private http: Http) {}

    getAllWords() {
        return this.http.get('http://localhost:3000/word')
        .toPromise()
        .then(res => res.json());
    }
}
