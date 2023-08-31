import {Injectable} from '@angular/core';
import {CramSchool} from "../models/CramSchool";
import {CRAMSCHOOLS} from "../mock/mock-getAllSchools";
import {catchError, map, Observable, of} from "rxjs";
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

  private cramSchoolsUrl = 'http://localhost:8080/api/cursinho';

  // Fake data

  //GET: get all schools
  getSchools(): Observable<CramSchool[]> {
    this.messageService.add('CramSchoolService: fetched schools');
    return of(CRAMSCHOOLS);
  }

  //GET: get school by suffix
  // getCramSchoolBySuffix(cramSchoolSuffix: string | null): Observable<CramSchool | undefined> {
  //   this.messageService.add(`CramSchoolService: fetched school by cramSchoolSuffix=${cramSchoolSuffix}`);
  //   const cramSchool =  CRAMSCHOOLS.find(school => school.cramSchoolSuffix === cramSchoolSuffix);
  //
  //
  //   return of(cramSchool);
  // }

  //PUT: update school
  updateCramSchoolBySuffix(cramSchoolSuffix: string | null, school: CramSchool | undefined): Observable<CramSchool | undefined> {
    this.messageService.add(`CramSchoolService: updated school by cramSchoolSuffix=${cramSchoolSuffix}`);
    return this.http.put<CramSchool>(this.cramSchoolsUrl, school).pipe(
      catchError((error: any) => {
        console.error('Error updating cram school:', error);
        return of(undefined);
      })
    );
  }

  // getSchools(): Observable<CramSchool[]> {
  //   this.messageService.add('CramSchoolService: fetched sschools');
  //   console.log(this.http.get<CramSchool[]>(this.cramSchoolsUrl));
  //   return this.http.get<CramSchool[]>(this.cramSchoolsUrl);
  // }
  //
  getCramSchoolBySuffix(cramSchoolSuffix: string | null): Observable<CramSchool | undefined> {
    this.messageService.add(`CramSchoolService: fetched school by cramSchoolSuffix=${cramSchoolSuffix}`);

    return this.http.get<CramSchool[]>(this.cramSchoolsUrl).pipe(
      map(cramSchools => cramSchools.find(school => school.cramSchoolSuffix === cramSchoolSuffix))
    );
  }
}
