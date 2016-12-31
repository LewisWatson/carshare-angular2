import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
        {id: 1, username: "John Doe"},
        {id: 2, username: "Jane Doe"},
        {id: 3, username: "Steve Smith"}
    ]
    let trips = [
      {id: 11, driver: users[0], passengers: [ users[0], users[1] ] },
      {id: 12, driver: users[1], passengers: [ users[0], users[1] ] },
      {id: 13, driver: users[2], passengers: [ users[0], users[1] ] },
      {id: 14, driver: users[2], passengers: [ users[0], users[1] ] },
      {id: 15, driver: users[1], passengers: [ users[0], users[1] ] },
      {id: 16, driver: users[0], passengers: [ users[0], users[1] ] },
      {id: 17, driver: users[2], passengers: [ users[0], users[1] ] },
      {id: 18, driver: users[1], passengers: [ users[0], users[1] ] },
      {id: 19, driver: users[0], passengers: [ users[0], users[1] ] },
      {id: 20, driver: users[0]}
    ];
    return {users, trips};
  }
}
