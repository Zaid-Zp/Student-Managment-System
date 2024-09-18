import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-newstudent',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,NgIf],
  templateUrl: './newstudent.component.html',
  styleUrl: './newstudent.component.scss'
})
export class NewstudentComponent  implements OnInit{
  public studentForm!:FormGroup;
  public student!:Student;
  public stdDetails!:Student|undefined
  @Input()
  set id(value:string){

   this.getDetails(value);
  }
  constructor(private router:Router,private fb:FormBuilder,private studentService:StudentService){}
  ngOnInit(): void {
    const id=Math.floor((Math.random()*100)+1).toString();
    this.initiStudent();
    this.studentForm=this.fb.group({
      id:[id],
      name:['',[Validators.required,Validators.minLength(2),Validators.maxLength(16),Validators.pattern('^([^0-9]*)$'),]],
      age:['',[Validators.required,Validators.min(18),]],
      number:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),]],
      email:['',[Validators.required,Validators.email]],
      img:['',[Validators.required,]]
    });
    if(this.stdDetails){
      this.studentForm.setValue(this.stdDetails);
    }
   
  

  }
  getDetails(id:string){
    this.stdDetails=this.studentService.getStudentsDetails(id);

  }
  addstudent(){
    const value=this.studentForm.value
    if(!this.stdDetails)
   { this.studentService.savestudentsDetails(this.studentForm.value);
    this.initiStudent(); 
  }
    
    else
   { this.studentService.updateStudentDetails(value.id,value);}
    this.router.navigate(['pages/student-list']);
  }

  initiStudent(){
    this.student={
      id:'',
      img:'',
      name:'',
      age:0,
      email:'',
      number:'',
    };
    
    
  }
  backtoList(){
    this.router.navigate(['pages/student-list']);

  }
}
