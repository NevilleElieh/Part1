import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  private apiUrl = 'http://localhost:4200/api/champions';

  constructor(private http: HttpClient) { }

  getChampions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
