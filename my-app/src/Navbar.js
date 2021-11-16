import Search from "./Search.js"

function NavBar({search, setSearch}){
    return(
        <Search search={search} setSearch={setSearch}/>
    );
}

export default NavBar