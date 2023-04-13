import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  users = [
    {username: 'user1', password: 'password1'},
    {username: 'user2', password: 'password2'},
    {username: 'user3', password: 'password3'}
  ];

  constructor() { }

  login(username: string, password: string): boolean {
    const user = this.users.find(user => user.username === username);
    if (user && user.password === password) {
      return true;
    }
    return false;
  }
}


