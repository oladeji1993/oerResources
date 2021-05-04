import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-selected',
  templateUrl: './courses-selected.component.html',
  styleUrls: ['./courses-selected.component.scss']
})
export class CoursesSelectedComponent implements OnInit {

  displayedColumns: string[] = ['title', 'code', 'unit'];
  // dataSource: Array<object> = [];

  constructor() { }

  ngOnInit(): void {
    // console.log(localStorage.getItem('selectedCourses'));
    // this.dataSource = localStorage.getItem(JSON.parse('selectedCourses'));
  }

  
  dataSource = [
    { title: 'Mathematical Modelling', code: 'MTH311', unit: 3 },
    { title: 'Discreet Mathematics', code: 'MTH312', unit: 4 },
    { title: 'Advance Modelling', code: 'MTH313', unit: 3 },
    { title: 'Entrepreneuship Development', code: 'CED310', unit: 3 },
    { title: 'Elementary Electronics', code: 'EEE314', unit: 3 },
    { title: 'Ontology', code: 'CSC315', unit: 3 },
    { title: 'Protege', code: 'CSC316', unit: 3 },
  ];

}
