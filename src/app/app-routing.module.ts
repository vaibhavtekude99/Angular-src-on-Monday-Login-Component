import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginHomeComponent } from './components/loginDetails/login-home/login-home.component';

const routes: Routes = [

 // {path:'',redirectTo:'goToLogin', pathMatch:'full'},
  {path:'goToLogin',component:LoginHomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
