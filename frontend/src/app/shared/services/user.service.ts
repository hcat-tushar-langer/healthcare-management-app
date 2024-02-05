import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserById(id: any) {
    return this.http.get(`${environment.apiUrl}/healthcare/users/${id}`);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/healthcare/users`, user);
  }
}