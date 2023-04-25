import { Component ,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AirlineService } from '../airline.service';
import { Airline } from '../airline';

@Component({
  selector: 'app-airline-details',
  templateUrl: './airline-details.component.html',
  styleUrls: ['./airline-details.component.css']
})
export class AirlineDetailsComponent implements OnInit {
 

    airlineId: number = 0;
    airline: any = [];
    constructor(private route: ActivatedRoute, private airlineService: AirlineService) { }
  
    ngOnInit(): void {
      
      this.airlineId = this.route.snapshot.params['airlineId'];
      this.airline = new Airline();
      this.airlineService.getAirlineById(this.airlineId).subscribe( data => {
      this.airline = data;
      });
    }
  
  }

