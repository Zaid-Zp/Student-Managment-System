import { Routes } from '@angular/router';
//import { StudentListComponent } from './pages/student/student-list/student-list.component';
//import { StudentdetailsComponent } from './pages/studentdetails/studentdetails.component';
import { StudentItemComponent } from './pages/student/student-item/student-item.component';
import { StudentListComponent } from './pages/student/student-list/student-list.component';
import { NewstudentComponent } from './pages/student/newstudent/newstudent.component';
import { StudentdetailsComponent } from './pages/studentdetails/studentdetails.component';
import { AuthComponent } from './auth/auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { PagesComponent } from './pages/pages/pages.component';


export const routes: Routes = [
    {
        path:'auth',
        component:AuthComponent,
        children:[
            {
                path:'',
                component:LoginComponent
            },
            {
                path:'**',
                redirectTo:''
            }
        ]
    },
    {
          path:'pages',
          component:PagesComponent,
          children:[
            {
                  
        path:'student-list',
        component:StudentListComponent,
        title:'STUDENT LIST'
    },  {
        path:'new-student',
        component:NewstudentComponent,
        title:' NEW STUDENT'
    },
    {
        path:'view-student/:id',
        component:StudentdetailsComponent,
        title:' VIEW STUDENT'
    },
    {
        path:'update-student/:id',
        component:NewstudentComponent,
        title:' UPDATE STUDENT'
    },
    {
        path:'**',
       redirectTo:'',
        title:'STUDENT LIST'
    } 
    
          ]
          
    },{
        path:'**',
        redirectTo:'auth'
    }
   /*  {
        path:'student-list',
        component:StudentListComponent,
        title:'STUDENT LIST'
    },  {
        path:'new-student',
        component:NewstudentComponent,
        title:' NEW STUDENT'
    },
    {
        path:'view-student/:id',
        component:StudentdetailsComponent,
        title:' VIEW STUDENT'
    },
    {
        path:'update-student/:id',
        component:NewstudentComponent,
        title:' UPDATE STUDENT'
    },
    {
        path:'**',
       redirectTo:'',
        title:'STUDENT LIST'
    } */
];
