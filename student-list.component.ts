import { Component, OnInit } from '@angular/core';
import { StudentItemComponent } from '../student-item/student-item.component';
import { NgFor } from '@angular/common';
import { StudentService } from '../student.service';
import { Student } from '../model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentItemComponent,NgFor,FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit {
  public studentList!:Student[];
  public studentfilterlist!:Student[];
  public search:string='';
  deletestudent(index:number){
    this.studentList.splice(index,1)
  }
  searchByName(){
    this.studentfilterlist=this.studentList.filter((std)=>{
      return std.name?.toLowerCase().includes(this.search?.toLowerCase())
    })
  }
  constructor(private studentService:StudentService,private router:Router){

  }
  ngOnInit(): void {
    this.studentList=this.studentService.students;
    this.searchByName();
  }
  gotonew(){
    this.router.navigate(['pages/new-student']);

  }

}
