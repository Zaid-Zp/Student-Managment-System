import { Injectable } from '@angular/core';
import { Student } from './model';
const STUDENT:Student[]= [
  {
    id:'s1',
    img: 'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg',
    name: 'Hujaifa',
    age: 23,
    email: 'hujaifanadaf@gmail.com',
    number: '965766532',
  },
  {
    id:'s2',
    img: 'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg',
    name: 'Avinash',
    age: 35,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    id:'s3',
    img: 'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg',
    name: 'Swapnil',
    age: 32,
    email: 'test@test.com',
    number: '12457654',
  },
  {id:'s4',
    img: 'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg',
    name: 'Yash',
    age: 38,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    id:'s5',
    img: 'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg',
    name: 'Praveen',
    age: 18,
    email: 'test@test.com',
    number: '12457654',
  },{
    id:'s6',
    img: 'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg',
    name: 'Siman',
    age: 32,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    id:'s7',
    img: 'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg',
    name: 'Abujar',
    age: 12,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    id:'s8',
    img: 'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg',
    name: 'Vijay',
    age: 22,
    email: 'test@gmail.com',
    number: '57687879',
  }
]; 
@Injectable({
  providedIn: 'root'
})
export class StudentService {
public studentList:Student[];

  constructor() { 
    this.studentList=STUDENT;
   
  }
  get students():Student[]{
    return this.studentList;
  }
  setstudents(students:Student[]){
  this.studentList=students;
  }
  getStudentsDetails(id:string):Student|undefined
  {
    return this.studentList.find((student)=>student.id===id);
  }
  savestudentsDetails(student:Student){
    this.studentList.unshift(student);

  }
  updateStudentDetails(id:string,updatedstd:Student){
    const index=this.studentList.findIndex((student)=>student.id===id)
    if(index>-1){
      this.studentList[index]=updatedstd;
    }

  }
  
}
