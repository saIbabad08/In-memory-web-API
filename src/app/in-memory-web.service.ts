import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryService implements InMemoryDbService {
  createDb() {
    const userData = [
      {id: 1, userName: 'sai', email:"sai@gmail.com",},
      {id: 2, userName: 'saibaba', email:"saibaba@gmail.com",},
      {id: 3, userName: 'sad', email:"sad@gmail.com",},
    ];
    return { userData };
  }
}