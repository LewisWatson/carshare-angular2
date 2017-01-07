import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {id: 1, username: "John Doe"},
      {id: 2, username: "Jane Doe"},
      {id: 3, username: "Steve Smith"}
    ];
    let carShares = [
      {id: 1, name: "Awesome Blazers Car Share Club"}
    ];
    let trips = [
      {id: 11, carShare: carShares[0], driver: users[0], passengers: [ users[0], users[1] ] },
      {id: 12, carShare: carShares[0], driver: users[1], passengers: [ users[0], users[1] ] },
      {id: 13, carShare: carShares[0], driver: users[2], passengers: [ users[0], users[1] ] },
      {id: 14, carShare: carShares[0], driver: users[2], passengers: [ users[0], users[1] ] },
      {id: 15, carShare: carShares[0], driver: users[1], passengers: [ users[0], users[1] ] },
      {id: 16, carShare: carShares[0], driver: users[0], passengers: [ users[0], users[1] ] },
      {id: 17, carShare: carShares[0], driver: users[2], passengers: [ users[0], users[1] ] },
      {id: 18, carShare: carShares[0], driver: users[1], passengers: [ users[0], users[1] ] },
      {id: 19, carShare: carShares[0], driver: users[0], passengers: [ users[0], users[1] ] },
      {id: 20, carShare: carShares[0], driver: users[0]}
    ];
    return {users, carShares, trips};
  }
}
