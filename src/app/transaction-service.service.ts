import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cheque } from './Cheque';
import { CreditCheque } from './CreditCheque';
import { Slip } from './slip';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }

  creditBySlip(slip:Slip):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<Slip>('http://localhost:8081/creditBySlip', slip, httpOptions);
  }
  debitBySlip(slip:Slip):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<Slip>('http://localhost:8081/debitBySlip', slip, httpOptions);
  }
  creditByCheque(creditCheque:CreditCheque):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<CreditCheque>('http://localhost:8081/creditBySlip', creditCheque, httpOptions);
  }
  debitByCheque(cheque:Cheque):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<Cheque>('http://localhost:8081/debitByCheque', cheque, httpOptions);
  }
}
