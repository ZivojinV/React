const AddNewFlight = ({addFlight}) => {
    return ( 
        <div className="New-Flight">
            <div className="Form">
                <div className="Box">
                    <label>Date:</label>
                    <input type={'text'} id="date"/>
                </div>
                <div className="Box">
                    <label>From:</label>
                    <input type={'text'} id="from"/>
                </div>
                <div className="Box">
                    <label>To:</label>
                    <input type={'text'} id="to"/>
                </div>
                <button className="nav-button" onClick={() => addFlight(document.getElementById("date").value, document.getElementById("from").value, document.getElementById("to").value)}>Add</button>

            </div>
        </div>
     );
}
 
export default AddNewFlight;