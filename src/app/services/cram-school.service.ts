import {Injectable} from '@angular/core';
import {CramSchool} from "../models/CramSchool";
import {catchError, map, Observable, of, tap} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CramSchoolService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) {
  }

  private baseUrl = 'https://murmuring-forest-17447-193d7778677f.herokuapp.com/api';

  private log(message: string) {
    this.messageService.add(`CramSchool Service: ${message}`);
  }

  private addSuffix(suffix: string): string {
    return this.baseUrl + suffix;
  }

  // //PUT: update school
  // updateCramSchoolBySuffix(cramSchoolSuffix: string | null, school: CramSchool | undefined): Observable<CramSchool | undefined> {
  //   this.messageService.add(`CramSchoolService: updated school by cramSchoolSuffix=${cramSchoolSuffix}`);
  //   const url = this.addSuffix('/cursinho');
  //
  //   return this.http.put<CramSchool>(url, school).pipe(
  //     catchError((error: any) => {
  //       // TODO: send the error to remote logging infrastructure
  //       console.error('Error updating cram school:', error);
  //       this.log(`Error updating cram school: ${error.message}`);
  //       return of(undefined);
  //     })
  //   );
  // }
  //

  //PUT: update school
  updateCramSchoolBySuffix(cramSchoolSuffix: string | null, school: CramSchool | undefined): Observable<CramSchool | undefined> {
    this.messageService.add(`CramSchoolService: updated school by cramSchoolSuffix=${cramSchoolSuffix}`);
    const url = this.addSuffix('/cursinho');

    return this.http.put<CramSchool>(url, school).pipe(
      tap(_ => this.log(`updated cram-school uuid=${school?.uuid}`)),
      catchError((error: any) => {
        // TODO: send the error to remote logging infrastructure
        this.log(`Error updating cram school: ${error.message}`);
        return of(undefined);
      })
    );
  }

  getSchools(): Observable<CramSchool[]> {
    this.messageService.add('CramSchoolService: fetched schools');
    const url = this.addSuffix('/cursinho');

    return this.http.get<CramSchool[]>(url).pipe(
      tap({
        next: nextValue => this.log(`fetched new schools`),
        error: error => this.log(`Error fetching new schools: ${error}`)
      }),
      catchError(this.handleError<CramSchool[]>('getSchools', []))
    );
  }

  // The catchError() operator intercepts an Observable that failed. The operator then passes the error to the error handling function.
  //
  // The following handleError() method reports the error and then returns an innocuous result so that the application keeps working.

  //
  getCramSchoolBySuffix(cramSchoolSuffix: string | null): Observable<CramSchool | undefined> {
    this.messageService.add(`CramSchoolService: fetched school by cramSchoolSuffix=${cramSchoolSuffix}`);

    const url = this.addSuffix('/cursinho');

    return this.http.get<CramSchool[]>(url).pipe(
      map(cramSchools => cramSchools.find(school => school.cramSchoolSuffix === cramSchoolSuffix))
    );
  }


  //  /**
  // * Handle Http operation that failed.
  // * Let the app continue.
  // *
  // * @param operation - name of the operation that failed
  // * @param result - optional value to return as the observable result
  // */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Fake data

  //GET: get all schools
  // getSchools(): Observable<CramSchool[]> {
  //   this.messageService.add('CramSchoolService: fetched schools');
  //   return of(CRAMSCHOOLS);
  // }

  //GET: get school by suffix
  // getCramSchoolBySuffix(cramSchoolSuffix: string | null): Observable<CramSchool | undefined> {
  //   this.messageService.add(`CramSchoolService: fetched school by cramSchoolSuffix=${cramSchoolSuffix}`);
  //   const cramSchool =  CRAMSCHOOLS.find(school => school.cramSchoolSuffix === cramSchoolSuffix);
  //
  //
  //   return of(cramSchool);
  // }
}
