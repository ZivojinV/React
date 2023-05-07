import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Flights from './components/Flights';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddNewFlight from './components/AddNewFlight';
import Tickets from './components/Tickets';

function App() {

  const [data, setData] = useState([
    {
      id: 0,
      date: "10/03/2023",
      from: "Vienna",
      to: "Belgrade",
      type: 'arrival',
    },
    {
      id: 1,
      date: "16/03/2023",
      from: "London",
      to: "Belgrade",
      type: 'arrival',
    },
    {
      id: 2,
      date: "05/03/2023",
      from: "Belgrade",
      to: "NYC",
      type: 'departure',
    },
  ]);

  const [flights, setFlights] = useState(data);

  function getDepartures(){
    let temp = data.filter((flight) => flight.type==="departure");
    setFlights(temp);
  }

  function getArrivals(){
    let temp = data.filter((flight) => flight.type==="arrival");
    setFlights(temp);
  }

  function getAll(){
    setFlights(data);
  }

  function isArriving(from, to){
    return from==="Belgrade" ? "departure" : "arrival";
  }

  function getId(){
    let id = 0;
    data.forEach(e => {
      id = e.id
    });
    return ++id;
  }

  function addFlight(date, from, to){
    // let temp = data;
    data.push(
      {
        id: getId(),
        date: date,
        from: from,
        to: to,
        type: isArriving(from, to)
      }
    );
    setFlights(data)
  }

  function SearchCity(city){
    let temp = data.filter((flight) => (flight.from===city || flight.to===city));
    setFlights(temp)
  }

  const [tickets, setTickets] = useState([]);

  function addTicket(flight){
    tickets.push(flight);
  }

  const [isAdmin, setIsAdmin] = useState(false); 

  function switchIsAdmin(){
    setIsAdmin(!isAdmin);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar switchIsAdmin={switchIsAdmin} isAdmin={isAdmin}/>
      <div className='Body'>
        <div>
          <Routes>
            <Route path='/' element={<Flights flights={flights} getDepartures={getDepartures} getArrivals={getArrivals} getAll={getAll} SearchCity={SearchCity} addTicket={addTicket}/>}/>
            <Route path='/flights' element={<Flights flights={flights} getDepartures={getDepartures} getArrivals={getArrivals} getAll={getAll} SearchCity={SearchCity} addTicket={addTicket}/>}/>
            <Route path='/newflight' element={<AddNewFlight addFlight={addFlight}/>}/>
            <Route path='/tickets' element={<Tickets flights={tickets}/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
