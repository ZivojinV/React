import Flight from "./Flight";

const Flights = ({flights, getDepartures, getArrivals, getAll, SearchCity, addTicket}) => {
    const handleSearch = () => {
        const input = document.getElementById("city");
        if (input.value) {
          SearchCity(input.value);
        }
      };
    return ( 
        <div className="Page">
            <div className="Above">
            <div className="Search">
            <input type="text" id="city"/>
            <button className="nav-button" onClick={() => handleSearch(document.getElementById("city").value)}>Search</button>
        </div>
                <div className="Type">
                    <button className='nav-button' onClick={() => getAll()}>All flights</button>
                    <button className='nav-button' onClick={() => getDepartures()}>Departures</button>
                    <button className='nav-button' onClick={() => getArrivals()}>Arrivals</button>
                    </div>
            </div>
            <div className="Container">
                <div className="Flights">
                {flights && flights.map((flight) => (
                    <Flight flight={flight} addTicket={addTicket} key={flight.id}/>
                ))}
                </div>
            </div>
        </div>


     );
}
 
export default Flights;