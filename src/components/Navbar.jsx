import { Link } from 'react-router-dom'

const Navbar = ({ switchIsAdmin, isAdmin }) => {
    return ( 
            <div className="Navbar">
                {isAdmin ? <Link to="/newflight"><button className='nav-button'>Add flight</button></Link> : <Link to='/tickets'><button className='nav-button'>Tickets</button></Link>}
                
                <Link to='/flights'><button className='nav-button'>Flights</button></Link>
                
                {isAdmin ? <button className='nav-button' onClick={() => switchIsAdmin()}>Switch to user</button> : <button className="nav-button" onClick={() => switchIsAdmin()}>Switch to admin</button>}
            </div>

     );
}
 
export default Navbar;