
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
    })
    
export class contactservices{

    userid: any = localStorage.getItem('userId');


    constructor(private http: HttpClient) { }
     contactAdd(data: any): Observable<any> {
     const headers = new HttpHeaders({'Content-Type': 'application/json','CommonToken':'zSo39f79-6869-43c2-bye3-1292f8b71don'});
     const options = {headers: headers};
    
     return this.http.post(`${environment.baseURL}/contact`,data, options);
     }

     getAllContact() {
        return this.http.get(environment.baseURL + 'contact' )
     }
     DeleteContact(i: any ) {
      return this.http.delete(environment.baseURL + 'contact/' + i);
   }
   getById(id:any) {
    return this.http.get(environment.baseURL + 'contact/'+ id);
   }

   update(){
       
   }

    }