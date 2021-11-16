

function Filter(){

    function handleCategoryChange(){
        
    }

    return(
        <div className="Filter">
            <select name="catFilter" onChange={handleCategoryChange}>
                <option value="All">Filter by category</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
        </div>
    );
}

export default Filter