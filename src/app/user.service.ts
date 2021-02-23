import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor(private http: HttpClient) { }
  
  userUrl = 'api/userData';  


  getUser(): Observable<any[]> {
    return this.http.get<any[]>(this.userUrl);
  }
  addUser(data):Observable<any>{
    return this.http.post(this.userUrl,data);
  }

  deleteUser(id: number): Observable<{}> {
    const url = `${this.userUrl}/${id}`; 
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
    
  }
  updateUser(data): Observable<any>{
    const url = `${this.userUrl}/${data.id}`
    return this.http.put<any>(url,data).pipe(
      catchError(this.handleError)
    );
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

}
