
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  matno = 'MU6548976';
  student: any = {};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    this.http.get('http://localhost:5000/api/student-profile/'+ this.matno).subscribe(
      (response) => {
        
        this.student = response;
        console.log(this.student)
      },
      (error) => {}
    );
  }

}
