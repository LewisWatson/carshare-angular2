import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {id: 1, username: "John Doe"},
      {id: 2, username: "Jane Doe"},
      {id: 3, username: "Steve Smith"}
    ];
    let allUsers = [ users[0], users[1], users[2]];
    let carShares = [
      {id: 1, name: "Awesome Blazers Car Share Club", members: allUsers},
      {id: 2, name: "Initech Commuters", members: allUsers},
      {id: 3, name: "The Panther Claws", members: allUsers}
    ];
    let trips = [
      {id: 11, timestamp: new Date(), metres: 123, carShare: carShares[0], driver: users[0], passengers: [ users[0], users[1] ] },
      {id: 12, timestamp: new Date(), metres: 123, carShare: carShares[0], driver: users[1], passengers: [ users[0], users[1] ] },
      {id: 13, timestamp: new Date(), metres: 123, carShare: carShares[0], driver: users[2], passengers: [ users[0], users[1] ] },
      {id: 14, timestamp: new Date(), metres: 123, carShare: carShares[0], driver: users[2], passengers: [ users[0], users[1] ] },
      {id: 15, timestamp: new Date(), metres: 123, carShare: carShares[0], driver: users[1], passengers: [ users[0], users[1] ] },
      {id: 16, timestamp: new Date(), metres: 123, carShare: carShares[0], driver: users[0], passengers: [ users[0], users[1] ] },
      {id: 17, timestamp: new Date(), metres: 123, carShare: carShares[0], driver: users[2], passengers: [ users[0], users[1] ] },
      {id: 18, timestamp: new Date(), metres: 123, carShare: carShares[0], driver: users[1], passengers: [ users[0], users[1] ] },
      {id: 19, timestamp: new Date(), metres: 123, carShare: carShares[0], driver: users[0], passengers: [ users[0], users[1] ] },
      {id: 20, timestamp: new Date(), metres: 123, carShare: carShares[0], driver: users[0]}
    ];
    return {users, carShares, trips};
  }
}
