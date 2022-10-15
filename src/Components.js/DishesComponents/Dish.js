const AllCategories =({dish}) => {
    return (<div>
        <img src={`./${dish.img}.jpg`}  alt ="food"/>
        <h2> {dish.name}</h2> 
        <h2> ${dish.price}</h2>
    
      </div>)
}

export default AllCategories