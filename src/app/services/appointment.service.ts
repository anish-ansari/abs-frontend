import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  api: string = 'http://localhost:8085/abs/api/v1/appointments';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // CREATE
  saveAppointment(appointment: Appointment): Observable<string> {
    return this.http.post<string>(this.api, appointment, { responseType: 'text' as 'json' });
  }

  // READ

  // UPDATE

  // DELETE
}
