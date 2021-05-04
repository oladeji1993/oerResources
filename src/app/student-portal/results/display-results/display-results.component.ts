import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.scss']
})
export class DisplayResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['code', 'title', 'unit', 'exam', 'grade'];
  dataSource = [
    { code: 'MTH311', title: 'Mathematical Modelling', unit: 3, exam: 84, grade: 'A' },
    { code: 'MTH312', title: 'Discreet Mathematics', unit: 4, exam: 84, grade: 'A' },
    { code: 'MTH313', title: 'Advance Modelling', unit: 3, exam: 84, grade: 'A' },
    { code: 'CED310', title: 'Entrepreneuship Development', unit: 3, exam: 84, grade: 'A' },
    { code: 'EEE314', title: 'Elementary Electronics', unit: 3, exam: 84, grade: 'A' },
    { code: 'CSC315', title: 'Ontology', unit: 3, exam: 84, grade: 'A' },
    { code: 'CSC316', title: 'Protege', unit: 3, exam: 84, grade: 'A' },
  ];

}
