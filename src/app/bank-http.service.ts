import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs'
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
import { throwError } from 'rxjs';

@Injectable()
export class BankHttpService {

  private baseUrl = "https://vast-shore-74260.herokuapp.com/banks";
  

  constructor(private _http : HttpClient) {
    console.log('Bank http service created');
  }

  private handleError(err:HttpErrorResponse){
    console.log('Handle http error');
    console.log(err.message);
    return Observable.throw(err.message);
  }


  public getBankBranches(city): any {
    console.log('calling')
    let myResponse = this._http.get(this.baseUrl + '?city=' + city);
    return myResponse;
  }
}