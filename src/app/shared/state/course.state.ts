
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Course } from './../models/course.model';
import { AddCourse, UpdateCourse, GetCourses, DeleteCourse } from './../actions/course.action';
import { CourseService } from './../services/portal/course.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { selectorOptionsMetaAccessor } from '@ngxs/store/src/utils/selector-utils';

export class CourseStateModel {
    courses?: Course[];
    areCoursesLoaded?: boolean;
}

@State<CourseStateModel>({
    name: 'courses',
    defaults: {
        courses: [],
        areCoursesLoaded: false
    }
})

export class CourseState {
    constructor(private courseService: CourseService, private router: Router){

    }

    @Selector()
    static getCoursesList(state: CourseStateModel){
        return state.courses;
    }

    @Selector()
    static areCoursesLoaded(state: CourseStateModel){
        return state.areCoursesLoaded;
    }

    @Action(GetCourses)
    getCourses({getState, setState}: StateContext<CourseStateModel>){
        return this.courseService.getAllCourses().pipe(tap(result => {
            const state = getState();
            setState({
                ...state,
                courses: result,
                areCoursesLoaded: true
            });
        }));
    }
}
