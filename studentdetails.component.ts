import { Component, Input } from '@angular/core';
import { StudentService } from '../student/student.service';
import { Router } from '@angular/router';
import { Student } from '../student/model';

@Component({
  selector: 'app-studentdetails',
  standalone: true,
  imports: [],
  templateUrl: './studentdetails.component.html',
  styleUrl: './studentdetails.component.scss'
})
export class StudentdetailsComponent {
  public studentList!:any;
  public studentone!: Student | undefined
  constructor(private studentService: StudentService,private router:Router) {

  }
  @Input()
  set id(value:string){

    this.initialStudentsDetails(value);
  }
  initialStudentsDetails(id:string)
  {
     this.studentone=this.studentService.getStudentsDetails(id);
  }
  gotoList(){
    this.router.navigate(['student-list']);
  }


}
