package airline.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
import airline.main_package.Airline;

//Whenever the server gets started this repository will be automatically get registered 

public interface AirlineRepository extends JpaRepository<Airline, Integer> {
 List<Airline>findByAirlineNameContaining(String name);
 
 List<Airline> findByisInternationalAirline(boolean isInternationalAirline);
}
