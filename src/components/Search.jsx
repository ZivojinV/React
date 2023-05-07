const Search = ({SearchCity}) => {
    const handleSearch = () => {
        const input = document.getElementById("city");
        if (input) {
          SearchCity(input.value);
        }
      };
    return ( 
        <div className="Search">
            <input type="text" id="city"/>
            <button className="nav-button" onClick={() => SearchCity(document.getElementById("city").value)}>Search</button>
        </div>
     );
}
 
export default Search;