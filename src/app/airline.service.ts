import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Airline } from './airline';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {
 
  private baseURL = "http://localhost:8080/AirlineSystem/airlines";

  constructor(private httpClient: HttpClient) { }

  getAirlinesList(): Observable<Airline[]>{
    return this.httpClient.get<Airline[]>(`${this.baseURL}`);
  }

  /*createAirline(airline: Airline): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, airline);
  }*/
  createAirline(airline: Airline): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, airline);
  }

  getAirlineById(airlineId: number): Observable<Airline>{
    return this.httpClient.get<Airline>(`${this.baseURL}/${airlineId}`);
  }

  updateAirline(airlineId: number, airline: Airline): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${airlineId}`, airline);
  }

  //localhost:4200/delete/5
  deleteAirline(airlineId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${airlineId}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}`);
  }

  findByName(name:any):Observable<Airline[]>{
    return this.httpClient.get<Airline[]>(`${this.baseURL}?name=${name}`);
  }

  

  findByInternationalAirline():Observable<Airline[]>{
    return this.httpClient.get<Airline[]>(`${this.baseURL}/airlineType`);
  }

  findByDomesticAirline():Observable<Airline[]>{
    return this.httpClient.get<Airline[]>(`${this.baseURL}/airlineDomesticType`);
   }
}





 