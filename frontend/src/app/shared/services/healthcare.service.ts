import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthcareService {

  constructor(private http: HttpClient) {
  }

  getAllHealthcare() {
    return this.http.get(`${environment.apiUrl}/healthcare/profile`);
  }

  getHealthcareById(id) {
    return this.http.get(`${environment.apiUrl}/healthcare/profile/${id}`);
  }
}
