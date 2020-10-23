import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CropService {

  constructor(private http: HttpClient) {
  }

  getAllCrops() {
    return this.http.get(`${environment.apiUrl}/crop/profile`);
  }

  getCropById(id) {
    return this.http.get(`${environment.apiUrl}/crop/profile/${id}`);
  }
}
