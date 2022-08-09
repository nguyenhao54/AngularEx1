import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Obj } from '../obj';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class ObjService {
  private apiUrl = 'http://localhost:5050/objs';
  constructor(private http: HttpClient) {}
  getObjs(): Observable<Obj[]> {
    return this.http.get<Obj[]>(this.apiUrl);
  }
  getObj(objId: number): Observable<Obj> {
    const url = `${this.apiUrl}/${objId}`;
    return this.http.get<Obj>(url);
  }
  deleteObj(obj: Obj): Observable<Obj> {
    const url = `${this.apiUrl}/${obj.id}`;
    return this.http.delete<Obj>(url);
  }
  updateObj(obj: Obj): Observable<Obj> {
    const url = `${this.apiUrl}/${obj.id}`;
    return this.http.put<Obj>(url, obj, httpOptions);
  }
  addObj(obj: Obj): Observable<Obj> {
    return this.http.post<Obj>(this.apiUrl, obj, httpOptions);
  }
}
