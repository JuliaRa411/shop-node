import dataDishes from "../../Data/dataDishes"
import Dish from "./Dish"

const Dishes  = () =>{
    
    return (<div >
        {dataDishes.map(dish => < Dish key ={dish.id}  dish ={dish} /> )}  
        </div>)
 

}
export default Dishes