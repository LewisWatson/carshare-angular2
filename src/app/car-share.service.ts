import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CarShare } from './car-share';

@Injectable()
export class CarShareService {

  private carSharesUrl = 'api/carShares';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getCarShares(): Promise<CarShare[]> {
    return this.http.get(this.carSharesUrl)
               .toPromise()
               .then(response => response.json().data as CarShare[])
               .catch(this.handleError);
  }

  getCarShare(id: number): Promise<CarShare> {
    const url = `${this.carSharesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as CarShare)
      .catch(this.handleError);
  }

  update(carShare: CarShare): Promise<CarShare> {
    const url = `${this.carSharesUrl}/${carShare.id}`;
    return this.http
      .put(url, JSON.stringify(carShare), {headers: this.headers})
      .toPromise()
      .then(() => carShare)
      .catch(this.handleError);
  }

  create(name: string): Promise<CarShare> {
    return this.http
      .post(this.carSharesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.carSharesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
