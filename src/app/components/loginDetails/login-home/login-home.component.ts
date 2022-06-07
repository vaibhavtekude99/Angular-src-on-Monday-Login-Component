import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDetails } from 'src/app/pojo/LoginDetails';
import { LoginDetailsService } from 'src/app/services/loginDetailsService/login-details.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit
 {
     loginDetails:LoginDetails=new LoginDetails();
     loginDetailsDB:LoginDetails=new LoginDetails();
     loginId:number=0;
     loginIdDB:number=0;
     passwordDB: string='';
  constructor(private loginService: LoginDetailsService,private activatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {

    
 }
  onClickLogin()
  {
    console.log(this.loginDetails);
    // this.submitted=true;
    
     this.loginService.getSingleLoginDetails(this.loginId).subscribe(data =>{
        console.log(data);
        this.loginDetails=data;
        

      });
  }


}
