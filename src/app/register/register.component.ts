import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent   {
  usrnm ='';
  email ='';
  psw ='';
  cofmpsw ='';
  telno= '';
 
  constructor(private router: Router) {

  }
  
  register(){


  /*if((this.usrnm === '') || (this.psw==='') ||(this.email=='') || (this.cofmpsw)||(this.telno)){
   alert("please fill all the details..");
  }
  else{
   alert ("Registered successfully");
   this.router.navigate(['login-page']);
  }*/
  if((this.usrnm  === '') || (this.psw==='' )|| (this.cofmpsw==='') || (this.email==='')|| (this.telno==='')){
  var status=confirm("It is mandatory to fill all the details");
}
else{
var status=confirm("Registered successfully");
  if(status==true){
  
  this.router.navigate(['login-page']);
}

}
}
}

