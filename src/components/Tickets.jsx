import Flight from "./Flight";

const Tickets = ({ flights }) => {
    return ( 
        <div className="Container" style={{paddingTop: "200px"}}>
            <div className="Flights">
                {flights && flights.map((flight) => (
                    <Flight flight={flight} key={flight.id}/>
                ))}
            </div>
        </div>
     );
}
 
export default Tickets;