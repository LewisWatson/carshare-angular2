import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';

import { User } from './user';
import { CarShare } from './car-share';
import { Trip } from './trip';

@Injectable()
@JsonApiDatastoreConfig({
  baseUrl: 'http://localhost:31415/v0/',
  models: {
    trips: Trip,
    carshares: CarShare,
    users: User
  }
})
export class DataStoreService extends JsonApiDatastore {

    constructor(http: Http) {
        super(http);
    }

}