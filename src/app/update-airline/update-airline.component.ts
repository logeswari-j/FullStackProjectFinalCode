import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AirlineService } from '../airline.service';
import { Airline } from '../airline';

@Component({
  selector: 'app-update-airline',
  templateUrl: './update-airline.component.html',
  styleUrls: ['./update-airline.component.css']
})
export class UpdateAirlineComponent implements OnInit{


  airlineId: number = 0;
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
  }
}


