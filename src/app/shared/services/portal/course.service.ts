import { Injectable } from '@angular/core';
import { Course } from '../../models/course.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllCourses(): Observable<Course[]>{
    return this.http.get<Course[]>('');
  }

  createCourse(course: Course): Observable<Course>{
    return this.http.post<Course>('', course);
  }

  deleteCourse(courseId: string): Observable<any>{
    return this.http.delete('' + courseId);
  }

  updateCourse(courseId: string | number, course: Course): Observable<any>{
    return this.http.put('' + courseId, course);
  }

}
