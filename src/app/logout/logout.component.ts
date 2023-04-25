import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    var status = confirm(" Are you want to logout?..");
    if(status==true){
      this.authenticationService.logOut();
      this.router.navigate(['login-page'])
    }
    else{
    this.router.navigate(['feedback']);
  }
  
  }
  

}
