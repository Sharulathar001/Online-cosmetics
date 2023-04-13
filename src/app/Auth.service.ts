import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registeredUsers = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
  ];

  constructor() { }

  // Check if the entered username and password match with registered user
  login(username: string, password: string): Observable<boolean> {
    const user = this.registeredUsers.find(u => u.username === username && u.password === password);
    if (user) {
      // User is authenticated
      return of(true);
    }
    // Authentication failed
    return of(false);
  }

}


