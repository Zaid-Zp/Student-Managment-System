import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 // public title2:string;
  public LogoUrl:string;
  constructor(private r:Router)
  {
    //this.title2="My App";
    this.LogoUrl='https://itpreneurpune.com/wp-content/uploads/2022/02/bigUntitled-4.png'
  }

gotostudentlist(){
  this.r.navigate(['pages/student-list']);
}

}
