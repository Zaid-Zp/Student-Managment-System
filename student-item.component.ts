import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-item',
  standalone: true,
  imports: [NgFor],
  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.scss'
  /* img:'../../assets/img/tejas.img.jpeg */
})
export class StudentItemComponent {
  
 
   @Input() student!:Student;
   @Output() onDelete=new EventEmitter();
   
   delete(){
    this.onDelete.emit()
   
}
constructor(private studentService:StudentService,private router:Router){

}
goToDetail(id:string){
  this.router.navigate(['pages/view-student',id]);

}
goToupdate(id:string){
  this.router.navigate(['pages/update-student',id]);

}
}
