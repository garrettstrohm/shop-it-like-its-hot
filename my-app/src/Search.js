

function Search({search, setSearch}){
    return(
        <div>
            <input type="text" placeholder="Search for goods here..." value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    );
}

export default Search