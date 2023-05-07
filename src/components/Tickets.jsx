import Flight from "./Flight";

const Tickets = ({ flights }) => {
    return ( 
        <div className="Container" style={{paddingTop: "200px"}}>
            <div className="Flights">
                {flights && flights.map((flight) => (
                    <Flight flight={flight}/>
                ))}
            </div>
        </div>
     );
}
 
export default Tickets;