const Dish =({dish}) => {
    return (<div>
        <img src={`./${dish.img}.jpg` }/>
        <h2> {dish.name}</h2>
        <h2> ${dish.price}</h2>
    
      </div>)
}

export default Dish