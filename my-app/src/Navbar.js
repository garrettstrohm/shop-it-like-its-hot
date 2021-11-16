import Search from "./Search.js"

function Navbar({search, setSearch}){
    return(
        <Search search={search} setSearch={setSearch}/>
    );
}

export default Navbar