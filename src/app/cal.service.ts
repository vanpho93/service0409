import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CalService {
    constructor(private http: Http) {}

    getResult(soA: string, soB: string, tenPhepTinh: string): Promise<string> {
        return this.http.get(`http://localhost:3000/tinh/${tenPhepTinh}/${soA}/${soB}`)
        .toPromise()
        .then(res => res.text()); // res => res.text
    }
}
