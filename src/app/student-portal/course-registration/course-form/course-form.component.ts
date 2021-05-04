import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


interface Course {
  code: string;
  title: string;
  unit: number;
}

// interface CourseElement {
//   code: string;
//   title: string;
//   unit: number;
// }


// const ELEMENT_DATA: CourseElement[] = [
//   { title: 'Mathematical Modelling', code: 'MTH311', unit: 3 },
//   { title: 'Discreet Mathematics', code: 'MTH312', unit: 4 },
//   { title: 'Advance Modelling', code: 'MTH313', unit: 3 },
//   { title: 'Entrepreneuship Development', code: 'CED310', unit: 3 },
//   { title: 'Elementary Electronics', code: 'EEE314', unit: 3 },
//   { title: 'Ontology', code: 'CSC315', unit: 3 },
//   { title: 'Protege', code: 'CSC316', unit: 3 },
//   { title: 'Visual Studio Code', code: 'CSC317', unit: 3 },
//   { title: 'Microsoft Office Packages', code: 'CSC318', unit: 2 },
//   { title: 'Corel Draw', code: 'CSC319', unit: 2 },
// ];


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  totalUnit: number = 0;
  coreCourses: any = [];
  restrictedCourses: any = [];
  electiveCourses: any = [];
  selectedCourses: Array<object> = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
      this.getCoreCourse().subscribe(
        (data: Course[]) => this.coreCourses = data,
        (err: any) => console.log(err),
        // () => console.log(this.coreCourses)
      );

      this.selection.changed.subscribe(change => {
        change.added.forEach(core => {
          this.totalUnit += core.unit;
          this.selectedCourses.push(core);
          // console.log(this.selectedCourses);
        })
        change.removed.forEach(core => {
          this.totalUnit -= core.unit;
          for(var index = 0; index < this.selectedCourses.length; index++){
            if(this.selectedCourses[index] === core){
              this.selectedCourses.splice(index, 1);
            }
          }
          // console.log(this.selectedCourses);
        })
      }) 

      this.getRestrictedCourse().subscribe(
        (data: Course[]) => this.restrictedCourses = data,
        (err: any) => console.log(err),
        // () => console.log(this.restrictedCourses)
      );

      this.getElectiveCourse().subscribe(
        (data: Course[]) => this.electiveCourses = data,
        (err: any) => console.log(err),
        // () => console.log(this.electiveCourses)
      );
  }

  displayedColumns: string[] = ['select', 'title', 'code', 'unit'];
  dataSource = new MatTableDataSource<Course>(this.coreCourses);
  selection = new SelectionModel<Course>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Course): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.title + 1}`;
  }

  register() {
    localStorage.setItem("selectedCourses", JSON.stringify(this.selectedCourses));
    this.router.navigateByUrl('/course-registration-preview');
    // this.router.navigate(['/course-registration-preview'], { queryParams: {data: this.selectedCourses }});
  }

  getCoreCourse(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:5000/api/courses/core-courses/index')
  }

  getRestrictedCourse(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:5000/api/courses/restricted-courses/index')
  }

  getElectiveCourse(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:5000/api/courses/elective-courses/index')
  }

}
