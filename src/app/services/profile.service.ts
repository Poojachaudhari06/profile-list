import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // private apiUrl = 'http://localhost:5000/profiles';
  
private apiUrl = `${environment.apiUrl}/profiles`;

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addProfile(profile: any): Observable<any> {
    return this.http.post(this.apiUrl, profile);
  }

  updateProfile(id: number, profile: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, profile);
  }

  deleteProfile(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
