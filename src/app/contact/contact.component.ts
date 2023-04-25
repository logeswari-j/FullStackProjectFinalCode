import { Component ,OnInit} from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit  {
  lName='';
  email='';
  Phone='';
  fName='';
 
  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }
  ngOnInit() {
    
  }
   submit(){
    if((this.fName==='')|| (this.lName==='')||(this.email==='')||(this.Phone==='')){
      var status=confirm("It is mandatory to fill all the details");
}
else{
var status=confirm("Thank you visiting our page....");
if(status==true){
  
  this.router.navigate(['feedback']);
}

 
}
}
    }
   
     


