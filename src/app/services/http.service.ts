import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Task} from '../models/task';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/jacekjuras_db/collections/tasks';
  readonly param = new HttpParams().set('apiKey', '7BFDq5t3jJAHCjk6Z2ziCwHXyS0P3zFe');
  //readonly API_KEY= '7BFDq5t3jJAHCjk6Z2ziCwHXyS0P3zFe';

  constructor(private http: HttpClient) {
    this.getTasks();
  }

  getTasks(): Observable<Array<Task>>{
   return this.http.get<Array<Task>>(this.URL_DB, {params: this.param});

  }

  saveTasks(list: Array<Task>){
    this.http.put(this.URL_DB,list , {params: this.param}).subscribe(data=>   //put - coś istnieje to nadpisuje, a nie ma to tworzy
    {console.log(data);
    });
  }
}
