package airline.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import airline.exceptionHandling.ResourceNotFoundException;
import airline.main_package.Airline;
import airline.repository.AirlineRepository;
//from angular it will get the value,whenever anyone click this link
@CrossOrigin(origins = "http://localhost:4200")

//to show the mapping in airline to server we are using this
//for each mapping we have to write responsebody for that we are using restcontroller here
@RestController
@RequestMapping("/AirlineSystem/")
public class AirlineController {

	@Autowired
	//using this as reference we can call all the hibernate methods
	
	private AirlineRepository airlineRepository;
	
	//WITHOUT USING ANY SERVICE CLASS DIRECTLY WE ARE USING IN REPO CLASS
	/* Getting all the airline-details.
	 * @GetMapping maps the HTTP GET requests on the  method.
	 * Here we get the airline records which are in the database. 
	 */

	
	@GetMapping("/airlines")
	public ResponseEntity<List<Airline>> getAllAirlines(@RequestParam(required =false) String name) {
		try {
			List<Airline> airlineList = new ArrayList<Airline>();
			if(name !=null) {
				airlineRepository.findByAirlineNameContaining(name).forEach(airlineList::add);
				return new ResponseEntity<>(airlineList,HttpStatus.OK);
			}
			else {
				airlineList=airlineRepository.findAll();
				return new ResponseEntity<>(airlineList,HttpStatus.OK);
			}
			
		}catch(Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
	}
	@GetMapping("/airlines/airlineType")
	public ResponseEntity<List<Airline>> findByFlight() {
		try {
			List<Airline> flightairlineList = airlineRepository.findByisInternationalAirline(true);
			if(flightairlineList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			  return new ResponseEntity<>(flightairlineList,HttpStatus.OK);
			
			
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		}
	
	@GetMapping("/airlines/airlineDomesticType")
	public ResponseEntity<List<Airline>> findByDomesticFlight() {
		try {
			List<Airline> flightairlineList = airlineRepository.findByisInternationalAirline(false);
			if(flightairlineList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			  return new ResponseEntity<>(flightairlineList,HttpStatus.OK);
			
			
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		}
	
	
	
		/* Creating airline details 
		 * @PostMapping annotation maps HTTP POST requests into this method.
		 * @RequestBody annotation-details given in request from user/raw(body in postman)are stored here 	
		 */
	/*@PostMapping("/airlines")
	public Airline createDetails(@RequestBody Airline Details) {
		return airlineRepository.save(Details);
	}*/
	
	@PostMapping("/airlines")
	public Airline createDetails(@RequestBody Airline Details) {
		return airlineRepository.save(Details);
	}
	
	/*@PostMapping("/airlines")
	public ResponseEntity<Airline> createDetails(@RequestBody Airline Details){
		Airline savedAirline=airlineRepository.save(Details);
		try {
			return new ResponseEntity<>(savedAirline,HttpStatus.CREATED);
			
		}catch(Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}*/
	

	// get airline by id rest api
		/* Getting airline-details by id 
		 * @GetMapping maps the HTTP GET requests on the  method by id
		 * @ResponseEntity represents an HTTP response, including status.
		 * @PathVariable is used to set the values,like getparameter in mvc's
		 * If the request went through,a 200 OK is returned,
		 * while a 404 Not Found is returned if the resource isn't found on the server.
		 */
	@GetMapping("/airlines/{id}")
	public ResponseEntity<Airline> getAirlineById(@PathVariable int id) {
		Airline Details = airlineRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Airline not exist with id :" + id));
		return ResponseEntity.ok(Details);
	}

	/* Updating the airline-details by id
	 * PUT HTTP method is used to update or modify the records with the help of id
	 * @PutMapping annotation is used for mapping HTTP PUT requests on the method.
	 * If the request went through,a 200 OK is returned,
	 * while a 404 Not Found is returned if the resource isn't found on the server.
	 */
	@PutMapping("/airlines/{id}")
	public ResponseEntity<Airline> updateDetails(@PathVariable int id, @RequestBody Airline updateDetails) {
		Airline airline = airlineRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Airline not exist with id :" + id));

		airline.setAirlineName(updateDetails.getAirlineName());
		airline.setSource(updateDetails.getSource());
		airline.setDestination(updateDetails.getDestination());
		airline.setSeatingCapacity(updateDetails.getSeatingCapacity());
		airline.setCost(updateDetails.getCost());

		Airline updatedDetails = airlineRepository.save(airline);
		return ResponseEntity.ok(updatedDetails);
	}
	 /*public ResponseEntity<Airline>updateBookingDetails(@PathVariable int id, @RequestBody Airline updateBookingDetails) {
			Airline airline = airlineRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Airline not exist with id :" + id));
			 airline.setnoOfSeats(updateBookingDetails.getnoOfSeats());
			 airline.setcalculatedCost(updateBookingDetails.getcalculatedCost());
			 Airline updatedDetails = airlineRepository.save(airline);
				return ResponseEntity.ok(updatedDetails);
	 }*/
				 
			 


	/* Deleting the airline-details by id
	 * @DeleteMapping annotation maps HTTP DELETE requests on the method and delete the records with the help of id
	 * The HTTP 200 OK success status response code indicates that the request has succeeded.
	 */
	@DeleteMapping("/airlines/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDetails(@PathVariable int id) {
		Airline airline = airlineRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Airline not exist with id :" + id));

		airlineRepository.delete(airline);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted successfully", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping("/airlines")
	public ResponseEntity<HttpStatus> deleteAllAirlines(){
		try {
			airlineRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}catch(Exception e) {
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	}
    
}

