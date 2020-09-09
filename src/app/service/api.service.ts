import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor( private http: HttpClient ) {}
  private formatErrors(error: any) {
    return throwError(error.error);
  }
  get(url: string, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this.http.get(url, {headers})
      .pipe(catchError(this.formatErrors));
   }
  
}
