import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";
import {IPredictRequest} from "../../inter/IApi";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  /**
   * Error handling
   * @param error - error
   */
  private onErrorCatch(error: any): void {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 404:       //not found
          this.router.navigateByUrl("/error?code=404");
          break;

          case 500:      //server error
          this.router.navigateByUrl("/error?code=500");
          break;

          case 503:      //server error
          this.router.navigateByUrl("/error?code=503");
          break;

          case 504:     //server error
          this.router.navigateByUrl("/error?code=504");
          break;
      }
    } else {
      console.error(error);
    }
  }

  /* EFFORT */

  /**
   * Get all issues
   * @param request - request
   */
  public postPredictAllIssues(request: IPredictRequest): Observable<any> {
    return this.http.post<any>(environment.PREDICT_ALL_ISSUES_URL, request, {
      responseType: 'json',
    }).pipe(
      catchError(async (error) => this.onErrorCatch(error))
    );
  }

  /**
   * Get LDA prediction
   * @param request - request
   */
  public postPredictIssueLda(request: IPredictRequest): Observable<any> {
    return this.http.post(environment.PREDICT_ISSUE_LDA_URL, request, {
      responseType: 'json',
    }).pipe(
      catchError(async (error) => this.onErrorCatch(error))
    );
  }

  /**
   * Get QDA prediction
   * @param request - request
   */
  public postPredictIssueQda(request: IPredictRequest): Observable<any> {
    return this.http.post(environment.PREDICT_ISSUE_QDA_URL, request, {
      responseType: 'json',
    }).pipe(
      catchError(async (error) => this.onErrorCatch(error))
    );
  }

  /**
   * Get RF prediction
   * @param request - request
   */
  public postPredictIssueRf(request: IPredictRequest): Observable<any> {
    return this.http.post(environment.PREDICT_ISSUE_RF_URL, request, {
      responseType: 'json',
    }).pipe(
      catchError(async (error) => this.onErrorCatch(error))
    );
  }

  /**
   * Get NN prediction
   * @param request - request
   */
  public postPredictIssueNn(request: IPredictRequest): Observable<any> {
    return this.http.post(environment.PREDICT_ISSUE_NN_URL, request, {
      responseType: 'json',
    }).pipe(
      catchError(async (error) => this.onErrorCatch(error))
    );
  }

  /**
   * Get similar issues
   * @param request - request
   */
  public postSimilarIssues(request: IPredictRequest): Observable<any> {
    return this.http.post(environment.SIMILAR_ISSUES_URL, request, {
      responseType: 'json',
    }).pipe(
      catchError(async (error) => this.onErrorCatch(error))
    );
  }

  /* CUSTOMER */

  /**
   * Get all customers
   */
  public getCustomers(): Observable<any> {
    return this.http.get(environment.CUSTOMERS_URL);
  }

  /**
   * Get customer effort
   * @param request - request
   */
  public postCustomer(request: any): Observable<any> {
    return this.http.post(environment.CUSTOMER_URL, request);
  }
}
