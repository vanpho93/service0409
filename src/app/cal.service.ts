import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class CalService {
    constructor(private http: Http) {}

    getResult(soA: string, soB: string, tenPhepTinh: string): Promise<string> {
        return this.http.get(`http://localhost:3000/tinh/${tenPhepTinh}/${soA}/${soB}`)
        .toPromise()
        .then(res => res.text()); // res => res.text
    }

    getResultByPost(soA: string, soB: string, tenPhepTinh: string) {
        const body = JSON.stringify({ soA, soB, tenPhepTinh });
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/tinh', body, { headers })
        .toPromise()
        .then(res => res.text());
    }
}
