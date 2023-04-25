import { Component,OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit{


  
    airlineId: number = 1;
    airline: Airline = new Airline();
    constructor(private airlineService: AirlineService,
      private route: ActivatedRoute,
      private router: Router) { }
      
      myFunction(){
        this.airline.seatingCapacity-=this.airline.noOfSeats;
        this.airline.calculatedCost=this.airline.noOfSeats*(this.airline.cost);
        
      }
    
      proceedPayment(){
        var status=confirm("Thank you for your booking");
        if(status==true){
        this.airlineService.updateAirline(this.airlineId, this.airline).subscribe( data =>{
         this. goToAirlinesList();
            
        }
        , error => console.log(error));
       
       }else{
        this.router.navigate(['/ticket-booking']);
       }
      }
      
    ngOnInit(): void {
      this.airlineId = this.route.snapshot.params['airlineId'];
  
      this.airlineService.getAirlineById(this.airlineId).subscribe(data => {
        this.airline = data;
      }, error => console.log(error));
      
      }
      goToAirlinesList(){
        this.router.navigate(['/airlines']);
    

  /*airlineId: number = 0;
  airline: Airline = new Airline();
  constructor(private airlineService: AirlineService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.airlineId = this.route.snapshot.params['airlineId'];

    this.airlineService.getAirlineById(this.airlineId).subscribe(data => {
      this.airline = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.airlineService.updateAirline(this.airlineId, this.airline).subscribe( data =>{
      this.goToAirlinesList();
    }
    , error => console.log(error));
  }

  goToAirlinesList(){
    this.router.navigate(['/airlines']);
  }*/
}


}


