package airline.main_package;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.hibernate.annotations.DynamicUpdate;
//Entity annotation defines that a class can be mapped to a table
@Entity

//DynamicUpdate ensures that Hibernate uses only the modified columns in the SQL statement that it generates for the update of an entity
@DynamicUpdate
public class Airline {
	/* @Id must be given to the entity classes, in which makes
	 * the attributes to act as primary key.In @GeneratedValue, what
	 * type of primary key to be generated is given in it. Here,primary key
	 * type IDENTITY is given which starts by 1 and increments by 1.
	 */
	@Id
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer airlineId;

	private String airlineName;

	private String source;

	private String destination;

	private Integer seatingCapacity;

	private Integer cost;
	
	
	private Integer noOfSeats;
	
	private Integer calculatedCost;
	
	private Boolean isInternationalAirline;
	
	public Airline() {
		
	}
	public Airline(Integer airlineId, String airlineName, String source, String destination, Integer seatingCapacity,
			Integer cost, Integer noOfSeats, Integer calculatedCost, Boolean isInternationalAirline) {
		
		this.airlineId = airlineId;
		this.airlineName = airlineName;
		this.source = source;
		this.destination = destination;
		this.seatingCapacity = seatingCapacity;
		this.cost = cost;
		this.noOfSeats = noOfSeats;
		this.calculatedCost = calculatedCost;
		this.isInternationalAirline = isInternationalAirline;
	}


	/*Here we used setter method for all the attributes to set the value
	 *This keyword is refers to the current class object and also 
	 *as the names are similar we used this keyword.
	 *Here we used getter method for  all the attributes to return it's value.
	 */
	
	public Integer getAirlineId() {
		return airlineId;
	}

	public void setAirlineId(Integer airlineId) {
		this.airlineId = airlineId;
	}


	public String getAirlineName() {
		return airlineName;
	}

	public void setAirlineName(String airlineName) {
		this.airlineName = airlineName;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public Integer getSeatingCapacity() {
		return seatingCapacity;
	}

	public void setSeatingCapacity(Integer seatingCapacity) {
		this.seatingCapacity = seatingCapacity;
	}

	public Integer getCost() {
		return cost;
	}

	public void setCost(Integer cost) {
		this.cost = cost;
	}
	
	public Integer getnoOfSeats() {
		return noOfSeats;
	}

	public void setnoOfSeats(Integer noOfSeats) {
		this.noOfSeats = noOfSeats;
	}
	
	public Integer getcalculatedCost() {
		return calculatedCost;
	}

	public void setcalculatedCost(Integer calculatedCost) {
		this.calculatedCost = calculatedCost;
	}
	public Boolean getisInternationalAirline() {
		return isInternationalAirline;
	}

	public void setisInternationalAirline(Boolean isInternationalAirline) {
		this.isInternationalAirline =isInternationalAirline;
	}


}
