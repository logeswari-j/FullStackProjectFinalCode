import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username = '';
  password = '';

  invalidLoginPage =false 
  errormessage: string | undefined;
  emessage: string | undefined;

constructor(private router: Router,
  private loginpageservice:AuthenticationService){ }

ngOnInit(): void {
  
}

checkLoginPage(){
  if (this.loginpageservice.authenticate(this.username,this.password,))
{
  this.router.navigate(['airlines']);
  console.log("navigate..");
  this.invalidLoginPage = false;
}
else 
this.invalidLoginPage = true;
this.emessage='Enter Correct Credentials!...';
}
}