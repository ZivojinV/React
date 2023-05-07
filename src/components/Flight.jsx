const Flight = ({flight, addTicket}) => {
    return ( 
        <div className="Flight">
            <div className="airport-image"/>
            <div className="Details">
                Date:{flight.date}<br/>
                From:{flight.from}<br/>
                To: {flight.to}
                <button className="nav-button" onClick={() => addTicket(flight)}>Add ticket</button>
            </div>
        </div>
    );     

}

export default Flight;