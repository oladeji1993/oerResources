import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.scss']
})
export class CourseRegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  sessions = ['2020/2021', '2019/2020', '2018/2019'];

  levels = [100, 200, 300, 400, 500, 600];

  semesters = ['First Semester', 'Second Semester'];

  submitCourseForm(){
    this.router.navigateByUrl('select-courses');
  }

}
