import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Trip } from './trip';

@Injectable()
export class TripService {

  private tripsUrl = 'api/trips';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getTrips(): Promise<Trip[]> {
    return this.http.get(this.tripsUrl)
               .toPromise()
               .then(response => response.json().data as Trip[])
               .catch(this.handleError);
  }

  getTrip(id: number): Promise<Trip> {
    const url = `${this.tripsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Trip)
      .catch(this.handleError);
  }

  update(trip: Trip): Promise<Trip> {
    const url = `${this.tripsUrl}/${trip.id}`;
    return this.http
      .put(url, JSON.stringify(trip), {headers: this.headers})
      .toPromise()
      .then(() => trip)
      .catch(this.handleError);
  }

  create(name: string): Promise<Trip> {
    return this.http
      .post(this.tripsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.tripsUrl}/${id}`;
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
