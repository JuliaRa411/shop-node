import dataDishes from "../../Data/dataDishes"
import Dish from "./Dish"
import {useSelector} from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";

const Dishes  = () =>{
const selectedCategory = useSelector(getSelectedCategory);
 
    
    return (<div >
        {dataDishes
        .filter(dish => {
            return selectedCategory === dish.category
        }
        )
        .map(dish => < Dish key ={dish.id}  dish ={dish} /> )}  
        </div>)
 

}
export default Dishes