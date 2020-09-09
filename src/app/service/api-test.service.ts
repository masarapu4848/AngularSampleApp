import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiTestService {

  header:HttpHeaders = new HttpHeaders({'Content-Type':'application/json;charset=utf-8'});
  private url: string = 'http://dummy.restapiexample.com/api/v1/employees';
  constructor(private apiService:ApiService) { }
  public getData():Observable<any>{
    let data =  this.apiService.get(this.url);
    return data;
  }
}
